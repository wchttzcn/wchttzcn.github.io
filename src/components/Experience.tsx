import { profile } from '../data/profile';
import Section from './Section';

export default function Experience() {
  return (
    <Section id="experience" n="01" label="experience">
      <ol className="space-y-12 border-l border-zinc-300 pl-6 dark:border-zinc-700">
        {profile.experience.map((job, idx) => (
          <li key={job.company} className="relative">
            <span aria-hidden="true" className={`${idx === 0 ? 'pulse-dot ' : ''}absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-accent`} />
            <h3 className="text-lg font-semibold">{job.company}</h3>
            <ul className="mt-1 space-y-0.5 text-sm text-zinc-600 dark:text-zinc-400">
              {job.roles.map((r) => (
                <li key={r.title}>
                  <span className="font-medium text-zinc-800 dark:text-zinc-200">{r.title}</span> · {r.period}
                </li>
              ))}
            </ul>
            <p className="mt-3 max-w-[65ch] text-zinc-700 dark:text-zinc-300">{job.summary}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
