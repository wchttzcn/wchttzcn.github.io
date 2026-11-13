import { profile } from '../data/profile';

const link = 'rounded px-1 py-0.5 hover:text-accent-fg dark:hover:text-accent-fg-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-10 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-[#0b0f0e]/90">
      <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-6">
        <a href="#top" className={`font-semibold ${link}`}>{profile.name}</a>
        <nav aria-label="Primary" className="flex items-center gap-3 text-sm sm:gap-4 text-zinc-600 dark:text-zinc-400">
          <a href="#experience" className={`hidden sm:inline ${link}`}>Experience</a>
          <a href="#work" className={`hidden sm:inline ${link}`}>Work</a>
          <a href="#side-projects" className={`hidden sm:inline ${link}`}>Side projects</a>
          <a href="#contact" className={`hidden sm:inline ${link}`}>Contact</a>
          <a href={profile.cv} target="_blank" rel="noopener" className={link}>Resume</a>
        </nav>
      </div>
    </header>
  );
}
