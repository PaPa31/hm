const path = require('path');

const baseUrl = process.env.BASE_URL || '/';

module.exports = {
  title: 'hm',
  tagline: 'Human and Machine',
  url: 'https://papa31.github.io',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  customFields: {
    description: 'papa pandora box',
  },
  organizationName: 'papa31', // Usually your GitHub org/user name.
  projectName: 'hm', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    hideableSidebar: true,
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['powershell'],
    },
    navbar: {
      hideOnScroll: true,
      title: 'hm',
      logo: {
        alt: 'Human&Machine',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'vs-code/snippets/all-vscode-snippets',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/courses/all-courses',
          label: 'Courses',
          position: 'left',
          activeBaseRegex: `/courses/`,
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
              label: 'vscode snippets',
              to: 'docs/vs-code/snippets/all-vscode-snippets',
            },
            {
              label: 'vscode shortcuts',
              to: 'docs/vs-code/all-vscode-keyboard-shortcuts',
            },
            {
              label: 'Exercises 1.31-1.60',
              to: 'docs/digital-design/exercises/exercises-131-160',
            },
            {
              label: 'updateAutoFrontmatter',
              to: 'docs/vs-code/macros/2-auto-frontmatter',
            },
          ],
        },
        {
          title: 'Courses',
          items: [
            {
              label: 'React Complete Guide (Hooks, React Router, Redux)',
              to: 'courses/react-complete-guide/0-all-lessons',
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
      copyright: `Copyright © ${new Date().getFullYear()} Human and Machine`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: true,
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          sidebarCollapsible: true,
          numberPrefixParser: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/papa31/hm/edit/documentation/',
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        gtag: {
          trackingID: 'G-M8RTQC8274',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        blog: {
          // routeBasePath: '/',
          path: 'blog',
          showReadingTime: true,
          postsPerPage: 5,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} hm`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          // Please change this to your repo.
          editUrl: 'https://github.com/papa31/hm/edit/documentation/',
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        pages: {
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en', 'ru'], // language codes
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'courses',
        path: 'courses',
        routeBasePath: 'courses',
        editUrl: 'https://github.com/papa31/hm/edit/documentation/',
        remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
        sidebarCollapsible: true,
        numberPrefixParser: false,
        sidebarPath: require.resolve('./sidebarsCourses.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        // swRegister: false,
        swCustom: path.resolve(__dirname, 'src/sw.js'),
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/docusaurus.png',
            color: 'rgb(62, 204, 94)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/docusaurus.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};
