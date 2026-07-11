import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SCHEDULE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Schedule — Whose Intelligence?",
};

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        title="Schedule"
        subtitle="Our workshop is scheduled to take place on Friday, 7th of August 2026."
      />

      <section>
        <div className="container-site">
          <ul className="list-none flex flex-col max-w-[820px]">
            {SCHEDULE.map((item, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row gap-2 sm:gap-6 py-5 border-b border-rule"
              >
                <span className="font-mono text-[13px] tracking-[0.08em] uppercase text-purple shrink-0 w-44 mt-[3px]">
                  {item.time}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-[18px] font-medium text-ink leading-relaxed">{item.title}</span>
                  {item.note && (
                    <span className="text-[16px] italic text-muted leading-relaxed max-w-[52ch]">{item.note}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
