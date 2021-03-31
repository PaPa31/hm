const baseUrl = process.env.BASE_URL || '/';

module.exports = {
  title: 'hm',
  tagline: 'Human@Machine',
  url: 'https://papa31.github.io',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'papa31', // Usually your GitHub org/user name.
  projectName: 'hm', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    hideableSidebar: true,
    sidebarCollapsible: true,
    navbar: {
      title: 'hm',
      logo: {
        alt: 'Human&Machine',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          label: 'Notes',
          position: 'left', // or 'right'
          items: [
            {
              label: 'Workplace',
              to: 'docs/workplace/git/git-workflow'
            },
            {
              label: 'Location',
              to: 'docs/location/Lvovskaya-2020-2021/black-friday-orders/when-starting-black-friday'
            },
            {
              label: 'Shells',
              to: 'docs/shells/automatic-directory-tree'
            },
            {
              label: 'Site-Generators',
              to: 'docs/site-generators/docusaurus/add-apple-style-window'
            }
          ],
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/papa31/hm',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/HumanMachine',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/HumanMachine',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/HumanMachine',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/papa31/hm',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Human&Machine`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.auto.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/papa31/hm/edit/documentation/',
            remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/papa31/hm/edit/main/',
            remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        pages: {
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-auto-sidebars',
    [require.resolve('docusaurus-lunr-search'), {
      languages: ['en', 'ru'] // language codes
    }] ],

};
