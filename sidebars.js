/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introdução',
      items: ['introducao'], // Supondo que exista um docs/introducao.md
    },
    {
      type: 'category',
      label: 'Endpoints da API',
      items: ['endpoints/statistics'],
    },
  ],
};

module.exports = sidebars;
