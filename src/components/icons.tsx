const base = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export const ExternalIcon = () => (
  <svg {...base}><path d="M7 17L17 7M8 7h9v9" /></svg>
);
export const GitHubIcon = () => (
  <svg {...base}><path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.200A4.6 4.6 0 0 0 4 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21" /></svg>
);
export const LinkedInIcon = () => (
  <svg {...base}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></svg>
);
export const MailIcon = () => (
  <svg {...base}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>
);
export const TerminalIcon = () => (
  <svg {...base}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M6 10l3 2-3 2M12 15h5" /></svg>
);
