import { profile } from '../data/profile';
import Section from './Section';

export default function About() {
  return (
    <Section id="about" n="04" label="also">
      <dl className="divide-y divide-zinc-200 dark:divide-zinc-800">
        {profile.about.map((r) => (
          <div key={r.label} className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <dt className="font-mono text-sm text-zinc-600 dark:text-zinc-400">{r.label}</dt>
            <dd>{r.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
