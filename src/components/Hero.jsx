import Toran from "./Toran";
import { event } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-maroon text-ivory">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

      <Toran className="h-9 w-full" />

      <div className="relative mx-auto max-w-2xl px-6 pb-16 pt-10 text-center">
        <p className="animate-fade-in font-body text-sm uppercase tracking-wide text-gold-light/80">
          {event.hostName}
        </p>

        <h1
          className="mt-4 animate-fade-in font-display text-4xl leading-tight text-gold-light sm:text-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          Ganpati Bappa Morya
        </h1>

        <p
          className="mx-auto mt-5 max-w-md animate-fade-in text-balance text-base text-ivory/90 sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          {event.hostName} warmly welcomes you home to celebrate Ganesh
          Chaturthi with us.
        </p>

        <div
          className="mt-8 inline-flex animate-fade-in flex-col gap-1 rounded-2xl border border-gold/30 bg-maroon-dark/60 px-6 py-4 text-sm sm:flex-row sm:gap-6"
          style={{ animationDelay: "0.3s" }}
        >
          <div>
            <span className="block text-gold-light/70">Sthapana</span>
            <span className="font-medium">
              {event.sthapanaDate}, {event.sthapanaTime}
            </span>
          </div>
          <div className="hidden w-px bg-gold/30 sm:block" />
          <div>
            <span className="block text-gold-light/70">Visarjan</span>
            <span className="font-medium">
              {event.visarjanDate}, {event.visarjanTime}
            </span>
          </div>
        </div>
      </div>

      <Toran className="h-9 w-full rotate-180" />
    </section>
  );
}
