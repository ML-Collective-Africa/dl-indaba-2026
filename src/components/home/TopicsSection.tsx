import { Eyebrow } from "@/components/ui/Eyebrow";

const tensions = [
  {
    number: "01",
    title: "The AI Safety & Policy Problem",
    body: "Safety guardrails and governance frameworks for agentic AI are predominantly designed for Western contexts. Do they hold when applied to African languages, cultures, and realities? Are the policies we are adopting encompassing enough for us; to what degree are we included or not? How do we ensure that we reduce catastrophic risks arising from AI Agents while factoring in our cultural context?",
  },
  {
    number: "02",
    title: "The Infrastructure & Architecture Paradox",
    body: "Africa faces real compute and infrastructure constraints, and the most feasible path to Agentic AI currently leads straight to dependency on the very systems that do not fully capture our nuances and context. The infrastructure required to train frontier-scale models from scratch is unavailable to most African institutions. Yet the alternative — permanent reliance on external APIs — carries its own risks. How do we pursue agentic capability in a constrained setting without necessarily deepening dependency on systems built elsewhere?",
  },
  {
    number: "03",
    title: "The Cultural Alignment Problem",
    body: "Frontier models are not culturally neutral, and the gaps they carry across language, context, and epistemic tradition do not disappear when you fine-tune on a small Yoruba or Amharic dataset. The cultural assumptions baked into these systems — about what constitutes a valid question, a good answer, a trustworthy source — reflect the communities that produced the training data and shaped the RLHF feedback. Whose intelligence are we building on?",
  },
  {
    number: "04",
    title: "The Value Extraction & Capability Trap",
    body: "When African developers and users interact with frontier models, they generate data and feedback that flows back to improve those models — for the benefit of labs elsewhere. We are, in effect, subsidizing the refinement of systems that were not built for us. The more African users adopt these systems, the more valuable they become to their creators, while the structural gap widens. Every time we default to a frontier model API instead of investing in local capacity, we make it harder to ever not need that API. The shortcut today becomes the ceiling tomorrow.",
  },
];

export function TopicsSection() {
  return (
    <section>
      <div className="container-site">
        <div className="max-w-[760px] mx-auto mb-8">
          <Eyebrow>Topics of Interest</Eyebrow>
          <h2 className="font-sans font-semibold text-2xl mt-4 mb-5">The Four Tensions</h2>
          <p className="text-[15px] text-ink-2 leading-relaxed mb-4 max-w-none">
            Today, building agentic AI almost inevitably means building on top of frontier models trained predominantly on
            Western data, optimized for Western languages, and aligned to Western values. When we deploy agents that
            negotiate and decide on behalf of African users, we are not just plugging into an API — we are embedding a
            particular worldview into the infrastructure of African lives.
          </p>
          <p className="text-[15px] text-ink-2 leading-relaxed max-w-none">
            This session takes a positional stance: the current default is insufficient and, in some cases, harmful. We
            are not arguing against using frontier models. We are arguing that we have not been honest enough about what
            we are trading away when we do.
          </p>
        </div>

        {/* 2×2 card grid */}
        <div className="max-w-[760px] mx-auto grid grid-cols-1 sm:grid-cols-2 border border-rule">
          {tensions.map((t) => (
            <div
              key={t.number}
              className="p-7 border-b border-r border-rule sm:[&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 max-sm:last:border-b-0 max-sm:border-r-0"
            >
              <p className="font-mono text-[11px] tracking-[0.12em] uppercase text-purple mb-3">
                Tension {t.number}
              </p>
              <h3 className="font-sans font-semibold text-[15px] mb-3">{t.title}</h3>
              <p className="text-[14px] text-muted leading-relaxed max-w-none mb-0">{t.body}</p>
            </div>
          ))}
        </div>

        <p className="text-[15px] text-muted leading-relaxed mt-8 max-w-[760px] mx-auto">
          This session does not pretend to resolve these tensions. It convenes researchers, practitioners, and
          policymakers to pressure-test them — to argue openly, rigorously, and without deference to the hype.
        </p>
      </div>
    </section>
  );
}
