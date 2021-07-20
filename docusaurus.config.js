const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Uplink Knowledge Base',
  tagline: 'Everything there is to know about how Uplink works',
  url: 'https://uplink.tech',
  baseUrl: '/knowledge-base/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'uplinkhq',
  projectName: 'knowledge-base',
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
      title: 'Knowledge Base',
      logo: {
        alt: 'Uplink',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Website',
          href: 'https://uplink.tech/',
        },
        {
          label: 'Blog',
          href: 'https://uplink.tech/blog',
        },
        {
          label: 'Slack',
          href: 'https://uplinkhq.slack.com',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/uplinkhq/knowledge-base',
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
            },
            {
              label: 'Blog',
              href: 'https://uplink.tech/blog',
            },
            {
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
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'uplink',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/uplinkhq/knowledge-base/edit/main/',
          editLocalizedFiles: true,
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
