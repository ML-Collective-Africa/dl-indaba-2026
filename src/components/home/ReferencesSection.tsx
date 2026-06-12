import { Eyebrow } from "@/components/ui/Eyebrow";

const references = [
  {
    title: "Africa's Digital Leap: Cloud, Connectivity & AI in the Next Decade",
    href: "https://storage.ghost.io/c/44/95/449506ca-034e-480f-9725-fcde08ef1cc1/content/files/2025/11/Africa---s-Digital-Leap--Cloud--Connectivity---AI-in-the-Next-Decade.pdf",
    label: "PDF",
  },
  {
    title: "Toward an African Agenda for AI Safety (2025)",
    href: "https://arxiv.org/pdf/2508.13179",
    label: "arXiv",
  },
  {
    title: "How Agentic AI Is Transforming African Banking — Oliver Wyman (2025)",
    href: "https://www.oliverwyman.com/our-expertise/insights/2025/apr/agentic-ai-transforming-african-banking-html",
    label: "Oliver Wyman",
  },
  {
    title: "Decolonizing African NLP: A Survey on Power Dynamics and Data Colonialism — AfricaNLP @ ICLR 2024",
    href: "https://openreview.net/pdf?id=D698BEfwgv",
    label: "OpenReview",
  },
  {
    title: "Decolonizing LLMs: An Ethnographic Framework for AI in African Contexts (2025)",
    href: "https://www.researchgate.net/publication/388916215",
    label: "ResearchGate",
  },
  {
    title: "Toward a Decolonial Framework for Communicating AI in African Public Service — Ooko (2025)",
    href: "https://journals.sagepub.com/doi/10.1177/27523543251374174",
    label: "SAGE Journals",
  },
  {
    title: "AI Investment in Resource-Constrained African Economies — MDPI (2025)",
    href: "https://www.mdpi.com/2673-4060/6/2/70",
    label: "MDPI",
  },
  {
    title: "Foresight Africa 2025–2030: AI and Emerging Technologies — Brookings",
    href: "https://www.brookings.edu/wp-content/uploads/2025/01/Foresight-Africa-2025-2030-Chapter-5.pdf",
    label: "Brookings",
  },
  {
    title: "Masakhane — community position on data sovereignty",
    href: "https://www.masakhane.io",
    label: "masakhane.io",
  },
];

export function ReferencesSection() {
  return (
    <section>
      <div className="container-site">
        <div className="max-w-[760px] mx-auto">
          <Eyebrow>References</Eyebrow>
          <h2 className="font-sans font-semibold text-2xl mt-4 mb-6">Further Reading</h2>

          <ul className="list-none flex flex-col gap-3">
            {references.map((ref, i) => (
              <li key={i} className="flex gap-3 text-[14px] text-muted leading-relaxed">
                <span className="font-mono text-purple shrink-0 mt-[2px]">—</span>
                <span>
                  {ref.title}{" "}
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noopener"
                    className="text-ink-2 underline underline-offset-2 hover:text-purple transition-colors"
                  >
                    {ref.label}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
