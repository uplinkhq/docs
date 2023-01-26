const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Uplink Docs',
  tagline: 'The Uplink Knowledge Base & Blog',
  url: 'https://uplink.tech',
  baseUrl: `/${process.env.BLOG ? 'blog' : 'knowledge-base'}/`,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'uplinkhq',
  projectName: 'docs',
  trailingSlash: true,
  scripts: [
    {
      src: '/qwerty/js/script.js',
      defer: true,
      'data-domain': 'uplink.tech',
      'data-api': '/qwerty/api/event'
    }
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Uplink',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Knowledge Base',
          to: process.env.BLOG ? '../knowledge-base' : '/'
        }, {
          label: 'Blog',
          to: process.env.BLOG ? '/' : '../blog'
        }, {
          label: 'Website',
          href: 'https://uplink.tech/',
        }, {
          label: 'Slack',
          href: 'https://uplinkhq.slack.com',
        }, {
          type: 'localeDropdown',
          position: 'right',
        }, {
          label: 'GitHub',
          href: 'https://github.com/uplinkhq/docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Uplink',
          items: [
            {
              label: 'Website',
              href: 'https://uplink.tech/',
            }, {
              label: 'Slack',
              href: 'https://uplinkhq.slack.com',
            },
          ],
        },
        {
          title: 'Login',
          items: [
            {
              label: 'Freelancer Login',
              href: 'https://my.uplink.tech',
            },
            {
              label: 'Company Login',
              href: 'https://app.uplink.tech',
            },
            {
              label: 'Recruiter Login',
              href: 'https://partners.uplink.tech',
            },
          ],
        },
      ]
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    algolia: {
      appId: 'K9RDB6VV79',
      apiKey: '137ddb554c86d39a0706b3a11d37928c',
      indexName: 'uplink',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: process.env.BLOG ? ' knowledge-base' : '/',
          editUrl: 'https://github.com/uplinkhq/docs/edit/main/',
          editLocalizedFiles: true,
        },
        blog: {
          routeBasePath: process.env.BLOG ? '/' : 'blog'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },
};
