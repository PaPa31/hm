// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const path = require('path');

// Used to debug production build issues faster
const isBuildFast = !!process.env.BUILD_FAST;

const baseUrl = process.env.BASE_URL || '/';

const isDeployPreview =
  !!process.env.NETLIFY && process.env.CONTEXT === 'deploy-preview';

const isI18nStaging = process.env.I18N_STAGING === 'true';

const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

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
  i18n: {
    defaultLocale: 'en',
    // eslint-disable-next-line no-nested-ternary
    locales: isDeployPreview
      ? // Deploy preview: keep it fast!
        ['en']
      : isI18nStaging
      ? // Staging locales: https://docusaurus-i18n-staging.netlify.app/
        ['en', 'ru']
      : // Production locales
        ['en', 'ru'],
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
            title: 'Support',
            items: [
              {
                label: 'TEST',
                to: 'support/support',
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
        remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
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
        remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn')],
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
