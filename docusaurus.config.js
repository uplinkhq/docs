const lightCodeTheme             = require('prism-react-renderer/themes/github');
const darkCodeTheme              = require('prism-react-renderer/themes/dracula');
const rehypeCloudinaryDocusaurus = require('rehype-cloudinary-docusaurus');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Uplink',
  tagline: 'The Uplink Knowledge Base & Blog',
  url: 'https://uplink.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'images/favicon.ico',
  organizationName: 'uplinkhq',
  projectName: 'docs',
  trailingSlash: true,
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://res.cloudinary.com'
      }
    }
  ],
  scripts: [
    {
      src: '//cdn.iframe.ly/embed.js?key=8af38be2d6c7c3c47a395519c784880e',
      async: true
    }, {
      src: '/qwerty/js/script.js',
      defer: true,
      'data-domain': 'uplink.tech',
      'data-api': '/qwerty/api/event'
    }
  ],
  themeConfig: {
    image: 'images/logo.png',
    colorMode: {
      respectPrefersColorScheme: true
    },
    navbar: {
      logo: {
        alt: 'Uplink',
        src: 'images/logo.png',
        href: 'https://uplink.tech/', // Set explicitly, otherwise "/" is assumed and a broken link error is thrown.
        target: '_self'
      },
      items: [
        {
          label: 'Blog',
          to: 'blog'
        }, {
          label: 'Knowledge Base',
          to: 'knowledge-base'
        }, {
          label: 'Topics',
          to: 'topics'
        }, {
          label: 'Uplink Website',
          href: 'https://uplink.tech/',
          position: 'right'
        }, {
          label: 'Community Slack',
          href: 'https://uplinkhq.slack.com',
          position: 'right'
        }, {
          type: 'localeDropdown',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Uplink',
          items: [
            {
              label: 'Uplink Website',
              href: 'https://uplink.tech/',
            }, {
              label: 'Community Slack',
              href: 'https://uplinkhq.slack.com',
            }
          ]
        }, {
          title: 'Login',
          items: [
            {
              label: 'Freelancer Login',
              href: 'https://my.uplink.tech',
            }, {
              label: 'Company Login',
              href: 'https://app.uplink.tech',
            }, {
              label: 'Recruiter Login',
              href: 'https://partners.uplink.tech',
            }
          ]
        }
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
    chatwoot: {
      websiteToken: "uL45w7sy3rxs8YA9Sq9eeBR7"
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/uplinkhq/docs/edit/main/',
          editLocalizedFiles: true,
        },
        blog: {
          blogTitle: 'The Uplink Blog',
          postsPerPage: 10,
          blogSidebarCount: 10,
          rehypePlugins: [
            process.env.NODE_ENV === 'production' && [
              rehypeCloudinaryDocusaurus,
              {
                cloudName: "uplinkhq",
                baseUrl: 'https://docs.uplink.tech'
              }
            ]
          ].filter(Boolean)
        }
      })
    ]
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en']
  },
  plugins: ["@chatwoot/docusaurus-plugin"],
};
