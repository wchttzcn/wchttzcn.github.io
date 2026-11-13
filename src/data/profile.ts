export interface Role { title: string; period: string }
export interface Job { company: string; roles: Role[]; summary: string }
export interface Project { name: string; period: string; url?: string; tech: string[] }
export interface SideItem { name: string; description: string; tags: string[] }
export interface AboutRow { label: string; value: string }

export const profile = {
  name: 'M. Mücahit Tezcan',
  title: 'Lead Frontend Engineer',
  location: 'London / Reading, UK',
  email: 'mmucahit.tezcan@gmail.com',
  intro:
    'Lead frontend engineer at MagiClick Digital UK, building React and TypeScript products for banks and retailers.',
  cv: '/cv/M-Mucahit-Tezcan-CV.pdf',
  links: {
    github: 'https://github.com/wchttzcn',
    linkedin: 'https://www.linkedin.com/in/m-mucahit-tezcan/',
  },
  experience: [
    {
      company: 'MagiClick Digital UK',
      roles: [
        { title: 'Lead React Developer', period: 'Aug 2024 – Present' },
        { title: 'Senior React Developer', period: 'Nov 2023 – Aug 2024' },
      ],
      summary: 'Lead the frontend team and MagiClick CMS v2: React, TypeScript, a 150+ component UI library and the MagicEdit rich-text editor.',
    },
    {
      company: 'MagiClick Digital Turkey',
      roles: [
        { title: 'Senior React Developer', period: 'May 2023 – Nov 2023' },
        { title: 'Frontend Developer', period: 'Jun 2020 – May 2023' },
      ],
      summary: 'Built frontends for Ziraat Bank, IKEA Turkey, Opet and Fibabanka; started CMS v2.',
    },
    {
      company: 'Freelance',
      roles: [{ title: 'Frontend Developer', period: 'Oct 2019 – Jun 2020' }],
      summary: 'React and Vue sites, headless CMS on Contentful.',
    },
  ] as Job[],
  projects: [
    {
      name: 'MagiClick CMS v2',
      period: 'Oct 2022 – Present',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      name: 'MagicEdit',
      period: 'Nov 2025 – Present',
      tech: ['TypeScript', 'React', 'Vue'],
    },
    {
      name: 'Ziraat Bank Ticaret Yolu',
      period: '2023',
      url: 'https://ticaretinyolu.ziraatbank.com.tr/',
      tech: ['React', 'TypeScript', 'React Query'],
    },
    {
      name: 'IKEA Turkey back office',
      period: '2021 – 2023',
      tech: ['React', 'TypeScript', 'react-admin'],
    },
    {
      name: 'Opet website and back office',
      period: '2020 – 2021',
      url: 'https://www.opet.com.tr/',
      tech: ['React', 'TypeScript', 'react-admin'],
    },
    {
      name: 'Ziraat Bank OPI',
      period: '2021',
      url: 'https://opi.ziraatbank.com.tr/',
      tech: ['React', 'TypeScript', 'Recoil'],
    },
    {
      name: 'MagiClick CMS for Banks (v1)',
      period: '2020 – Present',
      tech: ['Vue', 'Vuex', 'vue-router'],
    },
    {
      name: 'Fibabanka Video Banking',
      period: '2020',
      tech: ['React', 'Redux', 'Formik'],
    },
  ] as Project[],
  sideProjects: {
    intro: 'Terminal tooling, Neovim and game programming after hours.',
    githubBase: 'https://github.com/wchttzcn',
    featured: {
      name: 'A 2D game in Odin',
      description: 'Written with raylib. More soon.',
      tags: ['Odin', 'raylib'],
    },
    label: 'Neovim & terminal',
    items: [
      { name: 'init.lua', description: 'My Neovim config: LSP, Treesitter, Telescope, Harpoon, Oil, fugitive.', tags: ['Lua'] },
      { name: 'music-player.nvim', description: 'Spotify now-playing inside Neovim, with OAuth handled by a tiny Lua server.', tags: ['Lua'] },
      { name: 'floaterminal.nvim', description: 'Floating terminal for Neovim.', tags: ['Lua'] },
      { name: 'dev-env', description: 'Dotfiles: Ghostty, tmux-sessionize, yazi, lazygit, AeroSpace.', tags: ['Shell'] },
    ] as SideItem[],
  },
  about: [
    { label: 'Mentoring', value: 'Scrimba coding mentor since 2020 · Community Hero badge' },
    { label: 'Education', value: 'Istanbul Arel University, Computer Programming (2017–2019)' },
    { label: 'Languages', value: 'Turkish (native), English (C1)' },
  ] as AboutRow[],
};
