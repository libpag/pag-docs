/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: '微信',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/wechat.png',
    infoLink: 'https://weixin.qq.com',
    pinned: true,
  },
  {
    caption: 'QQ',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/qq.png',
    infoLink: 'https://im.qq.com',
    pinned: true,
  },
  {
    caption: '王者荣耀',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/wangzhe.png',
    infoLink: 'https://pvp.qq.com',
    pinned: true,
  },
  {
    caption: '微视',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/weishi.png',
    infoLink: 'https://weishi.qq.com/',
    pinned: true,
  },
  {
    caption: '腾讯视频',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/tencentvideo.jpg',
    infoLink: 'https://v.qq.com',
    pinned: true,
  },
  {
    caption: '腾讯云',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/tencentcloud.png',
    infoLink: 'https://cloud.tencent.com/',
    pinned: true,
  },
  {
    caption: 'QQ空间',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/qzone.png',
    infoLink: 'https://qzone.qq.com/',
    pinned: true,
  },
  {
    caption: '天天P图',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/pitu.png',
    infoLink: 'https://tu.qq.com/',
    pinned: true,
  },
  {
    caption: '猫饼',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/maobing.png',
    infoLink: 'http://xiaodaotv.com/',
    pinned: true,
  },
  {
    caption: '火锅视频',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/yoo.png',
    infoLink: 'http://yoo.qq.com/',
    pinned: true,
  },
  {
    caption: '腾讯动漫',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/dongman.png',
    infoLink: 'https://ac.qq.com',
    pinned: true,
  },
  {
    caption: '起点',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/qidian.png',
    infoLink: 'https://www.qidian.com',
    pinned: true,
  },
  {
    caption: '企鹅电竞',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/qiedianjing.jpeg',
    infoLink: 'https://egame.qq.com/',
  },
  {
    caption: '央视频',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/yangvideo.jpeg',
    infoLink: 'https://www.yangshipin.cn/',
  },
  {
    caption: 'Q音宝贝',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/qyingbaby.png',
    infoLink: '',
  },
  {
    caption: '欢遇',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/huanyu.png',
    infoLink: '',
  },
];

const siteConfig = {
  title: 'PAG', // Title for your website.
  tagline: 'Portable Animated Graphics',
  url: 'https://pag.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'libpag.github.io',
  organizationName: 'libpag',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  separateCss: ["static/apis/android/stylesheet.css", "static/apis/ios/css/style.css"],
  headerLinks: [
    {doc: 'pag-export', label: '文档'},
    {href: 'api', label: 'API参考'},
    {doc: 'faq', label: '常见问题'}
    //{ search: true },
    //{ languages: true }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/pag-256x256.png',
  footerIcon: 'img/pag-256x256.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2c373d',
    secondaryColor: '#1f262a',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} pag.io`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: false,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
