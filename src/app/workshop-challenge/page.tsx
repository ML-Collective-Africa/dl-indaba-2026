import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Workshop Challenge — Whose Intelligence?",
};

const submissionRequirements = [
  "Use voice to achieve a downstream task (the agentic component), not simply convert speech to text.",
  "Benchmark performance on code-switched audio input across at least three speech models, including an Intron Sahara API, and at least two other models of the team's choice (global, local, open-source, or commercial).",
  "Target a specific vertical or use case (see categories below).",
  "Where permitted, submit the code-switched audio samples used for testing, with basic metadata (language pair, domain, accent/country, device type, noise conditions).",
];

const categories = [
  "Health",
  "Fintech, Telco & Customer Experience",
  "Legal & Public Services",
  "Agriculture & Education",
  "Other high-impact use cases (humanitarian response, accessibility, media, transport, commerce, civic engagement, etc.)",
];

const submissions = [
  {
    label: "Solution Description",
    desc: "A short description of the problem, target users, solution, and technical overview highlighting key design decisions.",
  },
  {
    label: "Demo",
    desc: "A short demo video of a working prototype or integrated application — a link to an unlisted/public YouTube video.",
  },
  {
    label: "Docs",
    desc: "Code or technical documentation (integrations into proprietary applications from startups or enterprises do not need to submit confidential code).",
  },
  {
    label: "Benchmark report",
    desc: "Results comparing at least three speech models (including Sahara), with pros and cons of using each.",
  },
  {
    label: "Ethics / Inclusion",
    desc: "A brief note on privacy, consent, safety, and responsible data use.",
  },
  {
    label: "Benchmark Audios (optional)",
    desc: "Consented, de-identified code-switched audio samples used for benchmarking in your selected category, with metadata.",
  },
];

const timeline = [
  { date: "3rd August 2026", event: "Registration opens" },
  { date: "6th August 2026", event: "Submission deadline" },
  { date: "7th August 2026", event: "Finalists announced at the workshop" },
  { date: "Same day / later online", event: "Winner(s) announced" },
];

const judging = [
  { criteria: "Real-world impact", desc: "Is the solution agentic, and does it address a genuine user need for a meaningful population?" },
  { criteria: "Code-switching performance", desc: "Quality and fairness of the benchmark comparison across models." },
  { criteria: "Product quality", desc: "Usability and workflow fit of the agentic application." },
  { criteria: "Technical execution", desc: "Reliability, integration, latency, robustness." },
  { criteria: "Ethics, safety & inclusion", desc: "Consent, privacy, bias awareness, respect for user dignity." },
];

const resources = [
  "Access to Sahara v2.5 code-switching APIs across supported language pairs.",
  "Access to the AfriSwitch benchmark dataset with code-switching samples in 12 language pairs.",
  "A public benchmarking framework for comparing model performance.",
];

export default function WorkshopChallengePage() {
  return (
    <>
      <PageHeader
        title="Workshop Challenge"
        subtitle="MLC (Africa) × Intron Agentic Voice AI Challenge — build voice-driven agentic applications that work the way Africa actually speaks."
      />

      <section>
        <div className="container-site">
          <div className="max-w-[760px] mx-auto flex flex-col gap-14">
            {/* Overview */}
            <div>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="font-sans font-semibold text-2xl mt-4 mb-5">The Challenge</h2>
              <p className="text-[15px] text-ink-2 leading-relaxed mb-4 max-w-none">
                Across Africa, people rarely speak in neat, single-language blocks. Conversations move naturally between
                English/French and languages like Swahili, Hausa, Zulu, Yoruba, Igbo, Pidgin, Amharic, or Kinyarwanda,
                often within the same sentence. This is <em>code-switching</em>, and it remains one of the most
                under-solved problems in voice AI: systems built for clean, monolingual speech tend to break down in the
                real, messy, multilingual settings where they&apos;re needed most.
              </p>
              <p className="text-[15px] text-ink-2 leading-relaxed max-w-none">
                The MLC (Africa) × Intron Agentic Voice AI Challenge invites participants at Deep Learning Indaba 2026 to
                build voice-driven agentic applications that work the way Africa actually speaks, using Intron&apos;s
                Sahara APIs as a foundation to help surface how well current speech models handle code-switched audio in
                real-world settings.
              </p>
            </div>

            {/* The Challenge Task */}
            <div>
              <Eyebrow>The Task</Eyebrow>
              <h2 className="font-sans font-semibold text-2xl mt-4 mb-5">Build an agentic voice application</h2>
              <p className="text-[15px] text-ink-2 leading-relaxed mb-5 max-w-none">
                A solution where voice is used to drive a downstream task or action, not just transcribe speech. Examples
                include a voice assistant that completes a booking, a voice-driven triage tool, a spoken-language
                form-filler, or a voice interface that takes an action on a user&apos;s behalf. Each submission must:
              </p>
              <ol className="list-none flex flex-col gap-3">
                {submissionRequirements.map((item, i) => (
                  <li key={i} className="flex gap-4 text-[15px] text-ink-2 leading-relaxed">
                    <span className="font-mono text-purple shrink-0 mt-[1px]">{i + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Suggested Categories */}
            <div>
              <Eyebrow>Categories</Eyebrow>
              <h2 className="font-sans font-semibold text-2xl mt-4 mb-3">Suggested Categories</h2>
              <p className="text-[15px] text-muted leading-relaxed mb-5 max-w-none">
                Teams are encouraged, but not required, to align their solution with one of the following:
              </p>
              <ul className="list-none flex flex-col gap-2">
                {categories.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-ink-2 leading-relaxed">
                    <span className="font-mono text-purple shrink-0 mt-[2px]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Submit */}
            <div>
              <Eyebrow>Deliverables</Eyebrow>
              <h2 className="font-sans font-semibold text-2xl mt-4 mb-6">What to Submit</h2>
              <ul className="list-none flex flex-col">
                {submissions.map((s, i) => (
                  <li
                    key={i}
                    className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-4 border-t border-rule last:border-b"
                  >
                    <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-purple shrink-0 w-44 mt-[3px]">
                      {s.label}
                    </span>
                    <span className="text-[15px] text-muted leading-relaxed">{s.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div>
              <Eyebrow>Timeline</Eyebrow>
              <h2 className="font-sans font-semibold text-2xl mt-4 mb-6">Key Dates</h2>
              <ul className="list-none flex flex-col">
                {timeline.map((t, i) => (
                  <li
                    key={i}
                    className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-4 border-t border-rule last:border-b"
                  >
                    <span className="font-mono text-[13px] tracking-[0.06em] text-purple shrink-0 w-52 mt-[2px]">
                      {t.date}
                    </span>
                    <span className="text-[15px] font-medium text-ink leading-relaxed">{t.event}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[13px] text-muted italic leading-relaxed mt-5 max-w-none">
                Teams that want to continue building after Indaba can carry over their submission into Intron&apos;s full
                Sahara CodeSwitch Africa Challenge (build period through mid-September, winners announced October 1).
              </p>
            </div>

            {/* Judging Criteria */}
            <div>
              <Eyebrow>Judging</Eyebrow>
              <h2 className="font-sans font-semibold text-2xl mt-4 mb-6">Judging Criteria</h2>
              <ul className="list-none flex flex-col">
                {judging.map((j, i) => (
                  <li
                    key={i}
                    className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-4 border-t border-rule last:border-b"
                  >
                    <span className="text-[15px] font-medium text-ink shrink-0 w-52 mt-[1px]">{j.criteria}</span>
                    <span className="text-[15px] text-muted leading-relaxed">{j.desc}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[14px] text-ink-2 leading-relaxed mt-5 max-w-none">
                <strong className="font-semibold text-ink">Bonus consideration for:</strong> strong benchmark design,
                low-resource language coverage, offline/low-bandwidth readiness, and clear potential to continue into the
                full Sahara CodeSwitch Africa Challenge.
              </p>
            </div>

            {/* Prizes */}
            <div>
              <Eyebrow>Prizes</Eyebrow>
              <h2 className="font-sans font-semibold text-2xl mt-4 mb-6">Workshop Challenge Prize</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative overflow-hidden border border-purple/30 bg-purple-tint p-8">
                  <span className="absolute left-0 top-0 h-full w-[4px] bg-purple" aria-hidden />
                  <p className="text-[11px] tracking-[0.14em] uppercase text-purple-deep font-semibold m-0 mb-4">
                    1st place · Winner
                  </p>
                  <p className="font-serif text-[clamp(2.4rem,6vw,3.25rem)] text-purple-deep m-0 leading-none">$1,200</p>
                </div>
                <div className="relative overflow-hidden border border-rule bg-paper-2 p-8">
                  <span className="absolute left-0 top-0 h-full w-[4px] bg-rule-2" aria-hidden />
                  <p className="text-[11px] tracking-[0.14em] uppercase text-muted font-semibold m-0 mb-4">
                    2nd place · Runner-up
                  </p>
                  <p className="font-serif text-[clamp(2.4rem,6vw,3.25rem)] text-ink m-0 leading-none">$800</p>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <Eyebrow>Resources</Eyebrow>
              <h2 className="font-sans font-semibold text-2xl mt-4 mb-6">Provided by Intron</h2>
              <ul className="list-none flex flex-col gap-2">
                {resources.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-ink-2 leading-relaxed">
                    <span className="font-mono text-purple shrink-0 mt-[2px]">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="border border-rule bg-paper-2 p-8 md:p-12 text-center flex flex-col items-center">
              <h2 className="font-serif text-[clamp(24px,3vw,36px)] font-normal leading-tight m-0 mb-3 max-w-[24ch]">
                Ready to build?
              </h2>
              <p className="text-[15px] text-muted max-w-[46ch] mb-7">
                Register your team and explore the full challenge details, Sahara APIs, and benchmarking framework.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="https://forms.gle/RV43DXHAJCTYr98U7" target="_blank" rel="noopener">
                  Register your team <span className="arrow">→</span>
                </Button>
                <Button href="https://intron.io/compete" variant="ghost" target="_blank" rel="noopener">
                  See full details <span className="arrow">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
