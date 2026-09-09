import { schedule } from "../data/content";

export default function Schedule() {
  return (
    <section id="schedule" className="mx-auto max-w-2xl px-6 py-14">
      <h2 className="text-center font-display text-2xl text-maroon">
        Two Days of Celebration
      </h2>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {schedule.map((day) => (
          <div key={day.day}>
            <div className="mb-4">
              <p className="text-xs uppercase tracking-wide text-gold-dark">
                {day.label}
              </p>
              <p className="font-display text-lg text-maroon">{day.day}</p>
            </div>

            <ol className="relative border-l border-gold/40 pl-5">
              {day.items.map((item) => (
                <li key={item.time + item.title} className="mb-6 last:mb-0">
                  <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                  <p className="text-sm font-semibold text-maroon">{item.time}</p>
                  <p className="text-ink">{item.title}</p>
                  {item.note && (
                    <p className="mt-0.5 text-sm text-ink/60">{item.note}</p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
