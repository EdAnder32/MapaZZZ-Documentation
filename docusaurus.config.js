module.exports = {
  title: 'MapaZZZ API',
  tagline: 'Dados em tempo real sobre zonas de risco de malária',
  url: 'https://mapazzz.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'mapazzz', // GitHub org/user
  projectName: 'api-doc',       // Nome do repositório

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
  ],

  themeConfig: {
    navbar: {
      title: 'MapaZZZ API',
      logo: {
        alt: 'Logo MapaZZZ',
        src: 'img/logo.png',
      },
      items: [
        { to: '/docs/introducao', label: 'Documentação', position: 'left' },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} MapaZZZ`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Troque para .js se estiver usando JS
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
