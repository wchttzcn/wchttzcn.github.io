import type { ReactNode } from 'react';

interface Props { id: string; label: string; n: string; subtitle?: string; children: ReactNode }

export default function Section({ id, label, n, subtitle, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="mt-28 scroll-mt-16">
      <h2 id={`${id}-label`} className="font-mono text-sm font-medium tracking-wide text-zinc-600 dark:text-zinc-400">
        <span className="font-semibold text-accent-fg dark:text-accent-fg-dark">{n}</span> — {label}
      </h2>
      {subtitle && <p className="mt-3 max-w-[65ch] text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
