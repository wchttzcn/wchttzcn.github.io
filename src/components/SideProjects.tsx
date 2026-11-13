import { profile } from '../data/profile';
import Section from './Section';
import Tag from './Tag';
import { TerminalIcon } from './icons';

const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

export default function SideProjects() {
  const sp = profile.sideProjects;
  const f = sp.featured;
  return (
    <Section id="side-projects" n="03" label="side projects" subtitle={sp.intro}>
      <div className="featured card relative rounded-lg border border-accent bg-accent/5 p-5">
        <p className="flex items-center gap-2 font-mono text-sm text-accent-fg dark:text-accent-fg-dark">
          <span aria-hidden="true" className="pulse-dot h-2 w-2 rounded-full bg-accent" />
          now building
        </p>
        <h3 className="mt-3 text-xl font-semibold">{f.name}</h3>
        <p className="mt-1 text-zinc-700 dark:text-zinc-300">{f.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {f.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </ul>
      </div>

      <h3 className="mt-12 flex items-center gap-2 font-mono text-sm text-zinc-600 dark:text-zinc-400">
        <span className="text-accent-fg dark:text-accent-fg-dark"><TerminalIcon /></span>
        {sp.label}
      </h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {sp.items.map((i) => (
          <li key={i.name} className="card flex flex-col rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
            <h4 className="font-mono text-sm font-semibold">
              <a
                href={`${sp.githubBase}/${i.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`break-words rounded underline decoration-zinc-400 underline-offset-4 hover:text-accent-fg hover:decoration-accent dark:hover:text-accent-fg-dark ${focus}`}
              >
                {i.name}
              </a>
            </h4>
            <p className="mt-1 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{i.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Languages">
              {i.tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </ul>
          </li>
        ))}
      </ul>

      <p className="more-link mt-10 font-mono text-sm">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded text-accent-fg underline-offset-4 hover:underline dark:text-accent-fg-dark ${focus}`}
        >
          More on GitHub <span aria-hidden="true" className="arrow inline-block">→</span>
        </a>
      </p>
    </Section>
  );
}
