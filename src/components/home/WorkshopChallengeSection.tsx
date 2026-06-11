import { Eyebrow } from "@/components/ui/Eyebrow";

export function WorkshopChallengeSection() {
  return (
    <section>
      <div className="container-site">
        <div className="max-w-[760px] mx-auto">
          <Eyebrow>Workshop Challenge</Eyebrow>
          <h2 className="font-sans font-semibold text-2xl mt-4 mb-5">Challenge Details</h2>

          <div className="border border-rule bg-paper-2 p-12 text-center flex flex-col items-center">
            <p className="font-mono font-bold text-[clamp(1.4rem,4vw,2rem)] tracking-[0.08em] uppercase text-purple mb-3">
              Coming Soon
            </p>
            <p className="text-[14px] text-muted mb-0">
              Full challenge brief, submission guidelines, and prizes will be posted here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
