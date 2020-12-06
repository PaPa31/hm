module.exports = {
  doca: [
    {
      type: 'category',
      label: 'Docusaurus',
      items: ['doc1', 'doc2', 'doc3'],
    },
    {
      type: 'category',
      label: 'Features',
      items: ['mdx'],
    },
  ],
  loca: [
    {
      type: 'category',
      label: 'Location',
      items: [
        {
          'Lvovskaya-2020-2021': [
            'location/Lvovskaya-2020-2021/black-friday-orders/when-starting-black-friday'
          ]
        }
      ],
    },
  ],
  worka: [
    {
      type: 'category',
      label: 'Workplace',
      items: [
        {
          'Git': [
            'workplace/git/git-workflow',
            'workplace/git/conventional-commits',
            'workplace/git/git-best-practicies'
          ]
        },
      ],
    },
  ],
  shelka: [
    {
      type: 'category',
      label: 'Shells',
      items: [
        'shells/automatic-directory-tree',
        'shells/local-k3s-cluster-multipass',
        'shells/windows-terminal-tips-and-tricks'
      ],
    }
  ],
  generka: [
    {
      type: 'category',
      label: 'Site-Generators',
      items: [
        {
          'Jekyll': [
            'site-generators/jekyll/use-any-theme-with-github-pages',
            'site-generators/jekyll/just-the-docs/breadcrumbs-android-fail'
          ]
        },
        {
          'Docusaurus': [
            'site-generators/docusaurus/add-apple-style-window-layout'
          ]
        }
      ],
    },
  ]
};
