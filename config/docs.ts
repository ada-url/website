import { MainNavItem, SidebarNavItem } from '@/types/nav'

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs/introduction',
    },
    {
      title: 'Playground',
      href: '/playground',
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
          href: '/docs/introduction',
          items: [],
        },
        {
          title: 'Installation',
          href: '/docs/installation',
          items: [],
        },
      ],
    },
    {
      title: 'CLI',
      items: [
        {
          title: 'Introduction',
          href: '/docs/cli',
          items: [],
        },
        {
          title: 'Performance',
          href: '/docs/cli/performance',
          items: [],
        },
      ],
    },
    {
      title: 'Supported Languages',
      items: [
        {
          title: 'C++ Client',
          href: '/docs/clients/cpp',
          items: [],
        },
        {
          title: 'Rust client',
          href: '/docs/clients/rust',
          items: [],
        },
        {
          title: 'Python client',
          href: '/docs/clients/python',
          items: [],
        },
        {
          title: 'Go client',
          href: '/docs/clients/go',
          items: [],
        },
      ],
    },
  ],
}
