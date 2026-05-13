import type { Person } from "@/lib/data";

interface PersonListProps {
  members: Person[];
}

export function PersonList({ members }: PersonListProps) {
  return (
    <div className="max-w-[1000px] mx-auto mt-8 border-t border-rule">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
        {members.map((person) => {
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
            <div
              key={person.name}
              className="flex justify-between items-baseline gap-4 py-3 border-b border-rule"
            >
              <span className="font-serif text-lg tracking-tight text-ink font-normal">
                {nameEl}
              </span>
              <span className="text-[13px] text-muted-2 text-right leading-tight font-medium uppercase tracking-wider whitespace-nowrap">
                {person.affiliation}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
