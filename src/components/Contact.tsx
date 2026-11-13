import { profile } from '../data/profile';
import Section from './Section';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons';

export const socialClass =
  'inline-flex items-center gap-2 rounded hover:text-accent-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:hover:text-accent-fg-dark';

export default function Contact() {
  return (
    <Section id="contact" n="05" label="contact">
      <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Let&rsquo;s talk</h3>
      <p className="mt-3 text-zinc-700 dark:text-zinc-300">Open to frontend work and mentoring.</p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-flex items-center gap-2 break-all rounded text-lg font-medium text-accent-fg underline decoration-accent/50 underline-offset-4 hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:text-accent-fg-dark"
      >
        <MailIcon /> {profile.email}
      </a>
      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-zinc-600 dark:text-zinc-400">
        <li><a href={profile.links.github} target="_blank" rel="noopener noreferrer" className={socialClass}><GitHubIcon /> GitHub</a></li>
        <li><a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className={socialClass}><LinkedInIcon /> LinkedIn</a></li>
      </ul>
    </Section>
  );
}
