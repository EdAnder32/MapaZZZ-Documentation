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
      items: [
        'api/statistics', // Esse é o caminho do arquivo que colocaremos
        // Adicione mais aqui depois: ex: 'api/reports'
      ],
    },
  ],
};

module.exports = sidebars;
