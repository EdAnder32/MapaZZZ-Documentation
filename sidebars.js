/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introdução',
      items: ['introducao'],
    },
    {
      type: 'category',
      label: 'Endpoints da API',
      items: [
        'endpoints/statistics',
        'endpoints-questionarios'
      ],
    },
  ],
};

module.exports = sidebars;
