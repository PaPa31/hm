// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const path = require('path');

const npm2yarn = require('@docusaurus/remark-plugin-npm2yarn');
const baseUrl = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'hm',
  tagline: 'Human and Machine',
  organizationName: 'papa31', // Usually your GitHub org/user name.
  projectName: 'hm', // Usually your repo name.
  baseUrl,
  url: 'https://papa31.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  customFields: {
    description: 'papa31 pandora box',
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        debug: true,
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          numberPrefixParser: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/papa31/hm/edit/documentation/',
          remarkPlugins: [npm2yarn, {sync: true}],
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
          remarkPlugins: [npm2yarn],
        },
        pages: {
          remarkPlugins: [npm2yarn],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          ignorePatterns: ['/tests/**'],
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
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
            to: '/courses',
            label: 'Courses',
            position: 'left',
            activeBaseRegex: `/courses/`,
          },
          {
            to: '/support',
            label: 'Support',
            position: 'left',
            activeBaseRegex: `/support/`,
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          {to: 'showcase', label: 'Showcase', position: 'left'},
          {
            href: 'https://github.com/papa31/hm',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
                to: 'courses/react-complete-guide',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'TEST',
                to: 'support',
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
      },
    }),
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en', 'ru'], // language codes
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'courses',
        path: 'courses',
        routeBasePath: 'courses',
        sidebarPath: require.resolve('./sidebarsCourses.js'),
        editUrl: 'https://github.com/papa31/hm/edit/documentation/',
        remarkPlugins: [npm2yarn],
        sidebarCollapsible: true,
        numberPrefixParser: false,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        id: 'support',
        path: './support', // Path to data on filesystem, relative to site dir.
        routeBasePath: 'support', // URL Route.
        include: ['**/*.md'],
        sidebarPath: require.resolve('./sidebarsSupport.js'),
        editUrl: 'https://github.com/papa31/hm/edit/documentation/',
        remarkPlugins: [npm2yarn],
        sidebarCollapsible: true,
        numberPrefixParser: false,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
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

module.exports = config;
