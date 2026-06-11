import { Button } from "@/components/ui/Button";
import { Countdown } from "./Countdown";
import { WORKSHOP_EVENT } from "@/lib/data";

const glanceItems: { key: string; value: string; href?: string }[] = [
  { key: "Format", value: WORKSHOP_EVENT.format },
  { key: "Length", value: WORKSHOP_EVENT.length },
  { key: "Venue", value: WORKSHOP_EVENT.venue, href: "https://deeplearningindaba.com" },
  { key: "Hosted by", value: WORKSHOP_EVENT.hostedBy },
  { key: "Workshop output", value: WORKSHOP_EVENT.output },
];

export function HeroSection() {
  return (
    <section>
      <div className="container-site text-center pt-18 pb-0">
        <h1 className="display font-serif font-normal text-[clamp(48px,9vw,132px)] leading-[0.92] tracking-tighter mx-auto max-w-[25ch] m-0">
          Whose <em className="italic text-purple">intelligence?</em>
        </h1>
        <p className="lede mt-8 text-[clamp(32px,4.2vw,52px)] leading-[1.18] max-w-[22ch] tracking-[-0.015em] mx-auto text-ink-2">
          Building Agentic AI in Africa without frontier-model dependency.
        </p>

        <Countdown />

        <div className="flex gap-3 mt-8 flex-wrap justify-center">
          <Button href="https://docs.google.com/forms/d/e/1FAIpQLSeaf_FMDr24udIeYACPsD0pnNQ4QHzOzuRPgWM5jVr9HdBURg/viewform" target="_blank" rel="noopener">
            Register <span className="arrow">→</span>
          </Button>
          <Button href="/schedule" variant="ghost">
            See the agenda
          </Button>
        </div>
      </div>

      <div className="container-site mt-12 pb-0">
        <div className="grid grid-cols-2 md:grid-cols-5 border-t border-b border-t-ink border-b-rule">
          {glanceItems.map((item) => (
            <div
              key={item.key}
              className="py-[22px] px-5 border-r border-rule last:border-r-0 max-md:border-b max-md:border-rule max-md:[&:nth-child(2n)]:border-r-0 flex flex-col gap-2"
            >
              <span className="font-mono text-xs tracking-[0.12em] uppercase text-muted">{item.key}</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener" className="font-serif text-lg leading-snug tracking-[-0.01em] no-underline hover:underline">
                  {item.value}
                </a>
              ) : (
                <span className="font-serif text-lg leading-snug tracking-[-0.01em]">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
