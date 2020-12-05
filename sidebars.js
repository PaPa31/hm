module.exports = {
  someSidebar: {
    Docusaurus: ['doc1', 'doc2', 'doc3'],
    Features: ['mdx'],
    Workplace: [
      {
        type: 'category',
        label: 'Git',
        items: [
          'workplace/git/git-workflow',
          'workplace/git/conventional-commits',
          'workplace/git/git-best-practicies'
        ]
      },
    ],
    Location: [
      {
        type: 'category',
        label: 'Lvovskaya-2020-2021',
        items : [
          'location/Lvovskaya-2020-2021/black-friday-orders/when-starting-black-friday',
        ]
      }
    ],
    'Site-Generators': [
      {
        type: 'category',
        label: 'Just-the-Docs',
        items: [
          'site-generators/just-the-docs/breadcrumbs/breadcrumbs-android-fail'
        ]
      }
    ],
  },
};
