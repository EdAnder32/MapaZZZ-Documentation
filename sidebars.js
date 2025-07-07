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
        'endpoints/reportes',
        'endpoints/zonas-de-risco',
        'endpoints/endpoints-questionarios',
      ],
    },
  ],
};

module.exports = sidebars;
