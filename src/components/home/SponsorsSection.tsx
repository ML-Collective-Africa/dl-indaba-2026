import { Eyebrow } from "@/components/ui/Eyebrow";

interface Sponsor {
  name: string;
  logo: string;
  href?: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Adaption Labs",
    logo: "/assets/images/sponsors/adaption-labs.png",
    href: "https://adaptionlabs.ai/",
  },
];

export function SponsorsSection({ plain = false }: { plain?: boolean }) {
  return (
    <section className={plain ? "" : "border-t border-rule bg-paper-2"}>
      <div className="container-site">
        <div className="max-w-[760px] mx-auto text-center">
          <Eyebrow className="justify-center">Sponsors</Eyebrow>

          <ul className="list-none flex flex-wrap items-center justify-center gap-x-14 gap-y-8 mt-8">
            {sponsors.map((s, i) => {
              const logo = (
                <img
                  src={s.logo}
                  alt={s.name}
                  className="h-9 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              );
              return (
                <li key={i}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noopener" aria-label={s.name}>
                      {logo}
                    </a>
                  ) : (
                    logo
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
