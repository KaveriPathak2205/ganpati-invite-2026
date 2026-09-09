import { event } from "../data/content";

export default function Location() {
  return (
    <section id="location" className="bg-maroon/[0.04]">
      <div className="mx-auto max-w-2xl px-6 py-14 text-center">
        <h2 className="font-display text-2xl text-maroon">Where to Find Us</h2>
        <p className="mx-auto mt-4 max-w-sm text-lg text-ink">
          {event.address}
        </p>
      </div>
    </section>
  );
}
