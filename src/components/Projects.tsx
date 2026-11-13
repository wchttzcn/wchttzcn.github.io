import { profile } from '../data/profile';
import Section from './Section';
import Tag from './Tag';

export default function Projects() {
  return (
    <Section id="work" n="02" label="client work" subtitle="Built at MagiClick for banks and retailers.">
      <ul className="grid gap-4 sm:grid-cols-2">
        {profile.projects.map((p) => (
          <li key={p.name} className="card flex flex-col rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
            <h3 className="font-semibold">
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded underline decoration-zinc-400 underline-offset-4 hover:text-accent-fg hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-accent-fg-dark"
                >
                  {p.name}
                </a>
              ) : (
                p.name
              )}
            </h3>
            <p className="mt-1 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{p.period}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
              {p.tech.map((t) => <Tag key={t}>{t}</Tag>)}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
