import { PortraitPlaceholder } from "@/components/ui/PortraitPlaceholder";
import type { Person } from "@/lib/data";
import { asset } from "@/lib/path";

interface PersonCardProps {
  person: Person;
}

export function PersonCard({ person }: PersonCardProps) {
  const profileUrl = person.linkedin || person.website;

  const nameEl = profileUrl ? (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-inherit hover:text-purple transition-colors duration-200 no-underline hover:underline"
    >
      {person.name}
    </a>
  ) : (
    person.name
  );

  return (
    <article className="flex flex-col items-center text-center">
      {person.image ? (
        <img
          src={asset(person.image)}
          alt={person.name}
          className="mb-4 w-[180px] max-w-full aspect-square rounded-full object-cover"
        />
      ) : (
        <PortraitPlaceholder className="mb-4 w-[180px] max-w-full aspect-square rounded-full" />
      )}
      <h3 className="font-serif text-xl tracking-[-0.01em] leading-snug m-1 mb-1.5 font-normal">{nameEl}</h3>
      <p className="m-0 text-[13px] text-muted leading-relaxed">{person.affiliation}</p>
    </article>
  );
}
