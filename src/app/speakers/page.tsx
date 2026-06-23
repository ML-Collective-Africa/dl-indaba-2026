import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { SPEAKERS } from "@/lib/data";
import { asset } from "@/lib/path";
import type { Speaker } from "@/lib/data";

export const metadata: Metadata = {
  title: "Panelists — Whose Intelligence?",
};

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const profileUrl = speaker.linkedin || speaker.website;

  return (
    <article className="flex flex-col items-center text-center">
      {speaker.image ? (
        <img
          src={asset(speaker.image)}
          alt={speaker.name}
          className="w-[160px] aspect-square rounded-full object-cover mb-5"
        />
      ) : (
        <div className="w-[160px] aspect-square rounded-full mb-5 bg-purple-tint border border-rule flex items-center justify-center shrink-0">
          <span className="font-serif text-[40px] text-purple select-none leading-none">
            {speaker.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
          </span>
        </div>
      )}

      <h3 className="font-serif font-normal text-[20px] leading-snug tracking-[-0.01em] mb-1">
        {profileUrl ? (
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit hover:text-purple transition-colors no-underline hover:underline"
          >
            {speaker.name}
          </a>
        ) : (
          speaker.name
        )}
      </h3>

      {speaker.affiliation && (
        <p className="text-[13px] text-muted italic leading-relaxed mb-0">{speaker.affiliation}</p>
      )}
    </article>
  );
}

export default function SpeakersPage() {
  const row1 = SPEAKERS.slice(0, 3);
  const row2 = SPEAKERS.slice(3);

  return (
    <>
      <PageHeader title="Panelists" />

      <section>
        <div className="container-site">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-16 mb-16">
            {row1.map((s, i) => (
              <div key={s.name} className={i === 2 ? "col-span-2 sm:col-span-1 flex justify-center" : ""}>
                <div className={i === 2 ? "w-full max-w-[200px] sm:max-w-none" : ""}>
                  <SpeakerCard speaker={s} />
                </div>
              </div>
            ))}
          </div>

          {row2.length > 0 && (
            <div className="grid grid-cols-2 gap-x-10 gap-y-16 max-w-[520px] mx-auto">
              {row2.map((s) => (
                <SpeakerCard key={s.name} speaker={s} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
