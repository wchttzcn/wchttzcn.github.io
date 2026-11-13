import { profile } from '../data/profile';
import type { CSSProperties } from 'react';
import { ExternalIcon } from './icons';

const lines: { prompt: boolean; text: string }[] = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'lead frontend engineer · london' },
  { prompt: true, text: 'cat now.txt' },
  { prompt: false, text: 'building a game in odin' },
  { prompt: true, text: 'echo $EDITOR' },
  { prompt: false, text: 'nvim' },
];

function Terminal() {
  return (
    <div aria-hidden="true" className="card overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="flex gap-1.5 border-b border-zinc-200 px-3 py-2.5 dark:border-zinc-800">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
      </div>
      <div className="space-y-1 p-4 font-mono text-sm leading-relaxed">
        {lines.map((l, i) => {
          const style = { '--n': l.text.length, '--d': `${(i >> 1) * 0.8 + (i & 1 ? 0.55 : 0.2)}s` } as CSSProperties;
          return l.prompt ? (
            <p key={l.text} className="break-words text-zinc-800 dark:text-zinc-200">
              <span className="text-accent-fg dark:text-accent-fg-dark">~ $</span>{' '}
              <span className="t-type inline-block overflow-hidden whitespace-nowrap align-bottom" style={style}>{l.text}</span>
            </p>
          ) : (
            <p key={l.text} className="t-out break-words text-zinc-600 dark:text-zinc-400" style={style}>{l.text}</p>
          );
        })}
        <p className="text-accent-fg dark:text-accent-fg-dark">
          ~ $ <span className="cursor inline-block h-[1.05em] w-[0.6em] translate-y-[0.2em] bg-accent" />
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-16 sm:pt-24">
      <div aria-hidden="true" className="hero-bg pointer-events-none absolute -inset-x-6 -top-12 -z-10 h-[34rem]" />
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400">{profile.title} · {profile.location}</p>
          <h1 className="name-grad mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
          <p className="mt-6 max-w-[34ch] text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener"
              className="btn-primary relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-accent-fg px-4 py-2 font-medium text-white hover:bg-[#145f4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:bg-accent dark:text-zinc-950 dark:hover:bg-accent-fg-dark"
            >
              Resume <ExternalIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-md border border-zinc-300 px-4 py-2 font-medium hover:border-accent hover:text-accent-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-zinc-700 dark:hover:text-accent-fg-dark"
            >
              Get in touch
            </a>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
}
