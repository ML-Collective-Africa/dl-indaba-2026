import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export function WorkshopChallengeSection() {
  return (
    <section>
      <div className="container-site">
        <div className="max-w-[860px] mx-auto">
          <div className="relative overflow-hidden border border-rule bg-purple-tint px-8 py-10 md:px-12 md:py-12">
            {/* accent bar */}
            <span className="absolute left-0 top-0 h-full w-[4px] bg-purple" aria-hidden />

            <Eyebrow>Workshop Challenge</Eyebrow>
            <h2 className="font-serif font-normal text-[clamp(26px,3.4vw,40px)] leading-[1.1] tracking-tight mt-4 mb-5 max-w-[20ch]">
              MLC (Africa) × Intron Agentic Voice AI Challenge
            </h2>
            <p className="text-[15px] text-ink-2 leading-relaxed mb-6 max-w-[58ch]">
              Build voice-driven agentic applications that work the way Africa actually speaks — handling code-switched,
              multilingual speech with Intron&apos;s Sahara APIs, and benchmarking how today&apos;s speech models really
              perform in the messy, multilingual settings where they&apos;re needed most.
            </p>

            <p className="text-[15px] text-ink font-medium mb-8">
              <span className="text-purple-deep">$2,000</span> in prizes.
            </p>

            <Button href="/workshop-challenge">
              Explore the challenge <span className="arrow">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
