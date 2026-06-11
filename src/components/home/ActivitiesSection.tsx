import { Eyebrow } from "@/components/ui/Eyebrow";

const activities = [
  {
    name: "Opening Teaser",
    desc: "A live provocation designed to immediately surface the tensions and set the tone for honest, critical dialogue.",
  },
  {
    name: "Workshop Challenge",
    desc: "Presentation of hackathon solution, detailing an example of agentic AI built for African realities under resource constraint, through a workshop challenge/hackathon.",
  },
  {
    name: "Positional Q&A",
    desc: "Short, provocative framings of each tension, designed to create productive disagreement rather than consensus.",
  },
  {
    name: "Fishbowl Dialogue",
    desc: "The core engagement mechanism; participants are not an audience but active contributors to a structured exchange.",
  },
  {
    name: "Live Position Capture",
    desc: "Key positions and disagreements are documented throughout, feeding directly into the post-session preprint.",
  },
];

export function ActivitiesSection() {
  return (
    <section>
      <div className="container-site">
        <div className="max-w-[760px] mx-auto">
          <Eyebrow>Activities</Eyebrow>
          <h2 className="font-sans font-semibold text-2xl mt-4 mb-5">Session Format &amp; Audience</h2>

          <div className="border-l-[3px] border-purple bg-purple-tint px-6 py-5 mb-8">
            <p className="text-[15px] text-ink-2 leading-relaxed max-w-none mb-0">
              <strong className="font-semibold text-ink">Target Audience:</strong> This session is designed for
              practitioners, startups, researchers, and policymakers at intermediate to advanced career stages who are
              building, studying, or shaping agentic AI systems in African contexts. Participants are expected to have
              familiarity with LLMs and agentic system concepts; this is not an introductory session. Startup founders
              navigating real infrastructure constraints will find particular value in the workshop challenge solutions
              and fishbowl segments.
            </p>
          </div>

          <ul className="list-none flex flex-col">
            {activities.map((a, i) => (
              <li
                key={i}
                className="flex gap-6 py-4 border-t border-rule last:border-b last:border-b-rule"
              >
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-purple shrink-0 w-36 mt-[3px]">
                  {a.name}
                </span>
                <span className="text-[15px] text-muted leading-relaxed">{a.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
