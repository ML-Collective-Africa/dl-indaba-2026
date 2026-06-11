import { Eyebrow } from "@/components/ui/Eyebrow";

export function AbstractSection() {
  return (
    <section>
      <div className="container-site">
        <div className="max-w-[760px] mx-auto">
          <Eyebrow>Overview</Eyebrow>
          <h2 className="font-sans font-semibold text-2xl mt-4 mb-5">Abstract</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed mb-4 max-w-none">
            The promise of Agentic AI is seductive: autonomous systems that perceive, plan, and act, thereby reducing the
            friction between human intent and outcome. However, Agentic AI is arriving in Africa on someone else&apos;s
            terms. Building agentic systems today almost inevitably means building on frontier models trained predominantly
            on Western data, optimized for Western languages, and aligned to Western values; yet deployed to negotiate,
            decide, and act on behalf of African users. Every API call, every default behavior, every quietly embedded
            assumption carries a worldview that was not entirely built with Africa in mind.
          </p>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-none">
            This session takes a positional stance: the current default is insufficient and, in some cases, harmful.
            Through a workshop challenge, positional talks, and a structured fishbowl dialogue, we pressure-test four
            tensions — AI Safety &amp; Policy, Infrastructure &amp; Architecture dependency, Cultural Alignment, and
            Value Extraction &amp; Capability Trap — working toward a community-driven position on sovereign agentic AI
            for Africa. The conversation will not end in the room; outputs will be compiled into an open preprint.
          </p>

          <h3 className="font-sans font-semibold text-base mt-10 mb-3">Goals &amp; Objectives</h3>
          <p className="text-[15px] text-ink-2 leading-relaxed mb-3 max-w-none">This session aims to:</p>
          <ul className="list-none flex flex-col gap-2">
            {[
              "Critically examine the assumptions embedded in building Agentic AI on top of frontier models in the African context.",
              "Move the African Agentic AI community beyond adoption conversations toward ownership and sovereignty conversations.",
              "Surface honest, grounded perspectives on the trade-offs between feasibility and dependency when building agentic systems under resource constraints.",
              "Contribute a community-driven position on what responsible, contextually-grounded Agentic AI development looks like for Africa.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-ink-2 leading-relaxed">
                <span className="font-mono text-purple shrink-0 mt-[2px]">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-sans font-semibold text-base mt-10 mb-3">Expected Outcomes for Participants</h3>
          <ul className="list-none flex flex-col gap-2">
            {[
              "A clearer framework for evaluating when and how to use frontier models in agentic AI tasks versus investing in local and compute-efficient capacity.",
              "Exposure to concrete examples of agentic AI suitable for African realities, grounding the theoretical tensions in practice.",
              "A structured post-session report detailing key positions, points of divergence, and resulting recommendations, published as an open preprint.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-ink-2 leading-relaxed">
                <span className="font-mono text-purple shrink-0 mt-[2px]">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
