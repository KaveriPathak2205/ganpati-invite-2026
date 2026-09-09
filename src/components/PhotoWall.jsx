import { useEffect, useState, useRef } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import imageCompression from "browser-image-compression";
import { db, storage, isFirebaseConfigured } from "../firebase";

const NAME_KEY = "ganpati-guest-name";

function Lightbox({ photos, index, onClose, onNav }) {
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNav]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 text-2xl text-white/80 hover:text-white"
        aria-label="Close"
      >
        ✕
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
        className="absolute left-2 text-3xl text-white/70 hover:text-white sm:left-6"
        aria-label="Previous photo"
      >
        ‹
      </button>

      <img
        src={photo.url}
        alt={`Photo shared by ${photo.name}`}
        className="max-h-[80vh] max-w-full rounded object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <p className="mt-3 text-sm text-white/80">Shared by {photo.name}</p>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
        className="absolute right-2 text-3xl text-white/70 hover:text-white sm:right-6"
        aria-label="Next photo"
      >
        ›
      </button>
    </div>
  );
}

export default function PhotoWall() {
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState(() => localStorage.getItem(NAME_KEY) || "");
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!isFirebaseConfigured) return;
    const q = query(collection(db, "photos"), orderBy("uploadedAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPhotos(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
    return unsubscribe;
  }, []);

  async function handleUpload(e) {
    e.preventDefault();
    if (!name.trim()) {
      setMessage("Please enter your name first.");
      return;
    }
    if (files.length === 0) {
      setMessage("Please choose at least one photo.");
      return;
    }

    localStorage.setItem(NAME_KEY, name.trim());
    setUploading(true);
    setMessage("");

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const compressed = await imageCompression(file, {
          maxWidthOrHeight: 1600,
          maxSizeMB: 1.5,
          useWebWorker: true,
        });

        const path = `photos/${Date.now()}-${file.name}`;
        const storageRef = ref(storage, path);
        const task = uploadBytesResumable(storageRef, compressed);

        await new Promise((resolve, reject) => {
          task.on(
            "state_changed",
            (snapshot) => {
              const pct = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(
                Math.round(((i + pct / 100) / files.length) * 100)
              );
            },
            reject,
            resolve
          );
        });

        const url = await getDownloadURL(storageRef);
        await addDoc(collection(db, "photos"), {
          name: name.trim(),
          url,
          storagePath: path,
          uploadedAt: serverTimestamp(),
        });
      }

      setMessage("Thanks for sharing! 🙏");
      setFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong uploading — please try again.");
    } finally {
      setUploading(false);
      setProgress(0);
    }
  }

  function navigateLightbox(delta) {
    setLightboxIndex((current) => {
      if (current === null) return current;
      const next = (current + delta + photos.length) % photos.length;
      return next;
    });
  }

  return (
    <section id="photos" className="mx-auto max-w-2xl px-6 py-14">
      <h2 className="text-center font-display text-2xl text-maroon">
        Share Your Photos
      </h2>
      <p className="mx-auto mt-2 max-w-md text-center text-sm text-ink/60">
        Add the photos you take during the celebration — everyone with this
        link will see them here.
      </p>

      {!isFirebaseConfigured ? (
        <div className="mt-8 rounded-lg border border-gold/40 bg-gold/10 p-6 text-center text-sm text-ink/70">
          Photo sharing isn't connected yet. Add your Firebase project keys
          to the environment variables (see the README) to turn this on.
        </div>
      ) : (
        <>
          <form
            onSubmit={handleUpload}
            className="mt-8 rounded-lg border border-gold/40 bg-white/60 p-6"
          >
            <label className="block text-sm font-medium text-ink">
              Your name
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priya"
                className="mt-1 w-full rounded-md border border-gold/40 bg-white px-3 py-2 text-ink focus:border-gold focus:outline-none"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-ink">
              Photos
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
                className="mt-1 block w-full text-sm text-ink/70 file:mr-3 file:rounded-full file:border-0 file:bg-maroon file:px-4 file:py-1.5 file:text-sm file:font-medium file:text-gold-light"
              />
            </label>

            <button
              type="submit"
              disabled={uploading}
              className="mt-5 w-full rounded-full bg-maroon px-5 py-2.5 font-medium text-gold-light transition-opacity hover:opacity-90 disabled:opacity-50"
            >
              {uploading ? `Uploading… ${progress}%` : "Upload photos"}
            </button>

            {message && (
              <p className="mt-3 text-center text-sm text-ink/70">{message}</p>
            )}
          </form>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {photos.map((photo, i) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="aspect-square overflow-hidden rounded-md border border-gold/20"
              >
                <img
                  src={photo.url}
                  alt={`Photo shared by ${photo.name}`}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {photos.length === 0 && (
            <p className="mt-8 text-center text-sm text-ink/50">
              No photos yet — be the first to share one.
            </p>
          )}
        </>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={navigateLightbox}
        />
      )}
    </section>
  );
}
