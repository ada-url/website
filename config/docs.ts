import { MainNavItem, SidebarNavItem } from '@/types/nav'

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: 'en/docs/introduction',
    },
    {
      title: 'Playground',
      href: 'https://playground.ada-url.com',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/ada-url/ada',
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Introduction',
          href: 'en/docs/introduction',
          items: [],
        },
        {
          title: 'Installation',
          href: 'en/docs/installation',
          items: [],
        },
      ],
    },
    {
      title: 'Supported Languages',
      items: [
        {
          title: 'C++ Client',
          href: 'en/docs/clients/cpp',
          items: [],
        },
        {
          title: 'Rust client',
          href: 'en/docs/clients/rust',
          items: [],
        },
        {
          title: 'Python client',
          href: 'en/docs/clients/python',
          items: [],
        },
        {
          title: 'Go client',
          href: 'en/docs/clients/go',
          items: [],
        },
      ],
    },
  ],
}
