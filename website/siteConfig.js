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
    caption: '腾讯视频',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/tencentvideo.jpg',
    infoLink: 'https://v.qq.com',
    pinned: true,
  },
  {
    caption: 'QQ音乐',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/qqmusic.png',
    infoLink: 'https://y.qq.com/',
    pinned: true
  },
  {
    caption: '全民K歌',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/kg.png',
    infoLink: 'https://kg.qq.com/index-pc.html',
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
    caption: 'NOW直播',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/now.png',
    infoLink: 'https://now.qq.com/',
    pinned: true,
  },
  {
    caption: '天天P图',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/pitu.png',
    infoLink: 'https://tu.qq.com/',
    pinned: true
  },
  {
    caption: '腾讯云',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/tencentcloud.png',
    infoLink: 'https://cloud.tencent.com/',
    pinned: true
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
    caption: '腾讯动漫',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/dongman.png',
    infoLink: 'https://ac.qq.com',
  },
  {
    caption: 'QQ阅读',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/QQReader.png',
    infoLink: 'https://yuedu.reader.qq.com/common/common/down/dist/index.html?actid=11822',
  },
  {
    caption: '智影',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/zhiying.jpeg',
    infoLink: 'https://zenvideo.qq.com/#/home',
  },
  {
    caption: '腾讯广告',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/AMS.png',
    infoLink: 'https://e.qq.com/ads/',
  },
  {
    caption: '起点',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/qidian.png',
    infoLink: 'https://www.qidian.com',
  },
  {
    caption: '红袖添香',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/hongxiu.png',
    infoLink: 'https://www.hongxiu.com/',
  },
  {
    caption: '央视频',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/yangvideo.png',
    infoLink: 'https://www.yangshipin.cn/',
  },
  {
    caption: '企鹅电竞',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/qiedianjing.jpeg',
    infoLink: 'https://egame.qq.com/',
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
  {
    caption: '猫呼',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/catcall.png',
    infoLink: '',
  },
  {
    caption: '猜歌星球',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/caige.png',
    infoLink: 'https://caige.qq.com/',
  },
  {
    caption: 'Q音探歌',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/tangge.png',
    infoLink: '',
  },
  {
    caption: '相册管家',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/xianchemanager.png',
    infoLink: '',
  },
  {
    caption: '轻聊',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/qingliao.png',
    infoLink: '',
  },
  {
    caption: '波动星球',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/bodongxingqiu.png',
    infoLink: '',
  },
];

const links = {
  "feature":[
    '/docs/tech/pag-depth-3.html',
    '/docs/ae-bmp-guide.html',
    '/docs/pag-edit.html',
    '/docs/profiler.html',
    '/docs/pag-edit.html'
  ],
  "download":{
    mac:"https://dldir1.qq.com/qqmi/libpag/PAGViewer.dmg",
    win:"https://dldir1.qq.com/qqmi/libpag/beta/PAGViewer_Installer.exe"
  }
}

const faq = [
{
  issue:"如何安装PAG?",
  link:"/docs/install.html"
},
{
  issue:"如何接入SDK?",
  link:"/docs/sdk.html"
}
,
{
  issue:"如何导出PAG文件?",
  link:"/docs/pag-export.html"
},
{
  issue:"PAG支持哪些AE特性?",
  link:"/docs/ae-support.html"
}
]

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
    {
      href:'/',label:'首页'
    },
    {
      href:'/docs/install.html',label:'设计师文档'
    },
    {
      href:'/docs/tech/pag-depth-1.html',label:'开发者文档'
    },
    {
      href:'/case.html', label:'案例展示'
    },
    {
      href:'https://qm.qq.com/cgi-bin/qm/qr?k=Wa65DTnEKo2hnPsvY-1EgJOF8tvKQ-ZT&jump_from=webapi',label:'加入讨论: 893379574'
    },
    {
      href:'/#download',label:'免费下载'
    }


    // {doc: 'pag-export', label: '文档'},
    // {doc: 'sdk-download', label: 'SDK下载'},
    // {href: '/api', label: 'API参考'},
    // {href: 'https://github.com/libpag/libpag/issues/new?assignees=&labels=&template=bug_report.md&title=', label: '问题反馈'}
    //{ search: true },
    //{ languages: true }
  ],

  // If you have users set above, you add it here:
  users,
  links,
  faq,
  /* path to images for header/footer */
  headerIcon: 'img/new_official_website/logo.png',
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
  scripts: ['/javascript/page.js','https://buttons.github.io/buttons.js', '/javascript/pagjs/pag.min.js'],
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
