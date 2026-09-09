import Toran from "./Toran";
import { event } from "../data/content";

const petals = [
  { left: "5%", delay: "0s", duration: "7s", size: "18px", rotate: "10deg" },
  { left: "12%", delay: "2s", duration: "8s", size: "13px", rotate: "-20deg" },
  { left: "20%", delay: "4s", duration: "6s", size: "16px", rotate: "25deg" },
  { left: "30%", delay: "1s", duration: "9s", size: "12px", rotate: "-10deg" },
  { left: "42%", delay: "3s", duration: "7s", size: "17px", rotate: "20deg" },
  { left: "55%", delay: "0.5s", duration: "8s", size: "14px", rotate: "-25deg" },
  { left: "65%", delay: "4s", duration: "7s", size: "18px", rotate: "15deg" },
  { left: "74%", delay: "2s", duration: "9s", size: "13px", rotate: "-15deg" },
  { left: "83%", delay: "5s", duration: "6s", size: "16px", rotate: "25deg" },
  { left: "92%", delay: "1s", duration: "8s", size: "12px", rotate: "-20deg" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-maroon text-ivory"
    >
      {/* Golden background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

      {/* Falling flower petals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {petals.map((petal, index) => (
          <span
            key={index}
            className="absolute -top-10 animate-petal text-xl"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              fontSize: petal.size,
              transform: `rotate(${petal.rotate})`,
            }}
          >
            {index % 3 === 0 ? "🌸" : index % 3 === 1 ? "🌼" : "🌺"}
          </span>
        ))}
      </div>

      <Toran className="h-9 w-full" />

      <div className="relative mx-auto max-w-2xl px-6 pb-16 pt-10 text-center">

        {/* Ganpati Icon */}
        <div
          className="mx-auto mb-5 flex h-40 w-40 items-center justify-center
                     rounded-full border border-gold/40
                     bg-maroon-dark/60 shadow-[0_0_45px_rgba(201,162,39,0.25)]
                     animate-fade-in"
        >
          <div className="absolute h-24 w-24 rounded-full bg-gold/10 blur-xl" />

          <img
            src="/ganpati.png"
            alt="Lord Ganesha"
            className="relative z-38 h-38 w-38 object-contain
                       rounded-full border border-gold/40
                       drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]
                       animate-gentle-float"
          />
        </div>

        {/* Decorative Om */}
        <div
          className="mb-3 text-3xl text-gold-light animate-fade-in"
          style={{ animationDelay: "0.05s" }}
        >
          ॐ
        </div>

        {/* Host */}
        <p
          className="animate-fade-in font-body text-sm uppercase tracking-wide
                     text-gold-light/80"
        >
          {event.hostName}
        </p>

        {/* Main heading */}
        <h1
          className="mt-4 animate-fade-in font-display text-4xl
                     leading-tight text-gold-light sm:text-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          Ganpati Bappa Morya
        </h1>

        {/* Subtitle */}
        <p
          className="mx-auto mt-5 max-w-md animate-fade-in text-balance
                     text-base text-ivory/90 sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          {event.hostName} warmly welcomes you home to celebrate Ganesh
          Chaturthi with us.
        </p>

        {/* Event dates */}
        <div
          className="mt-8 inline-flex animate-fade-in flex-col gap-1
                     rounded-2xl border border-gold/30
                     bg-maroon-dark/60 px-6 py-4 text-sm
                     sm:flex-row sm:gap-6"
          style={{ animationDelay: "0.3s" }}
        >
          <div>
            <span className="block text-gold-light/70">
              Sthapana
            </span>

            <span className="font-medium">
              {event.sthapanaDate}, {event.sthapanaTime}
            </span>
          </div>

          <div className="hidden w-px bg-gold/30 sm:block" />

          <div>
            <span className="block text-gold-light/70">
              Visarjan
            </span>

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
