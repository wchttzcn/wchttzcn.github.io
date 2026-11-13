import { profile } from '../data/profile';
import { socialClass } from './Contact';

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-sm text-zinc-600 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="flex gap-4">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className={socialClass}>GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className={socialClass}>LinkedIn</a>
          <a href={`mailto:${profile.email}`} className={socialClass}>Email</a>
        </p>
      </div>
    </footer>
  );
}
