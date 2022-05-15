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
    image: 'https://pag.qq.com/website/static/img/wechat.png',
    infoLink: 'https://weixin.qq.com',
    pinned: true,
  },
  {
    caption: 'QQ',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/qq.png',
    infoLink: 'https://im.qq.com',
    pinned: true,
  },
  {
    caption: '王者荣耀',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/wangzhe.png',
    infoLink: 'https://pvp.qq.com',
    pinned: true,
  },
  {
    caption: '腾讯视频',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/tencentvideo.jpg',
    infoLink: 'https://v.qq.com',
    pinned: true,
  },
  {
    caption: 'QQ音乐',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/qqmusic.png',
    infoLink: 'https://y.qq.com/',
    pinned: true
  },
  {
    caption: 'QQ空间',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/qzone.png',
    infoLink: 'https://qzone.qq.com/',
    pinned: true,
  },
  {
    caption: '腾讯新闻',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/imgtencentnews.webp',
    infoLink: 'https://news.qq.com/',
    pinned: true,
  },
  {
    caption: '和平精英',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/hepingjingying.webp',
    infoLink: 'https://gp.qq.com/',
    pinned: true,
  },
  {
    caption: '英雄联盟手游',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/yingxionglianmeng.png',
    infoLink: 'https://lolm.qq.com/act/a20220509verson/index.html?e_code=529016&exchangeType=1',
    pinned: true,
  },
  {
    caption: '全民K歌',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/kg.png',
    infoLink: 'https://kg.qq.com/index-pc.html',
    pinned: true,
  },
  {
    caption: 'NOW直播',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/now.png',
    infoLink: 'https://now.qq.com/',
    pinned: true,
  },
  {
    caption: '腾讯云',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/tencentcloud.png',
    infoLink: 'https://cloud.tencent.com/',
    pinned: true
  },
  {
    caption: '京东内容助手',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/jingdonglife.webp',
    infoLink: 'https://dr.jd.com/',
    pinned: true
  },
  {
    caption: '虎牙直播',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/huya.webp',
    infoLink: 'https://www.huya.com/',
    pinned: true
  },
  {
    caption: '腾讯动漫',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/dongman.png',
    infoLink: 'https://ac.qq.com',
  },
  {
    caption: '腾讯广告',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/AMS.png',
    infoLink: 'https://e.qq.com/ads/',
  },
  {
    caption: '智影',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/zhiying.jpeg',
    infoLink: 'https://zenvideo.qq.com/#/home',
    pinned: true,
  },
  {
    caption: '天天P图',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/pitu.png',
    infoLink: 'https://tu.qq.com/',
    pinned: true
  },
  {
    caption: 'QQ阅读',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/QQReader.png',
    infoLink: 'https://yuedu.reader.qq.com/common/common/down/dist/index.html?actid=11822',
  },
  {
    caption: '微视',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/weishi.png',
    infoLink: 'https://weishi.qq.com/',
    pinned: true,
  },
  {
    caption: '起点',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/qidian.png',
    infoLink: 'https://www.qidian.com',
  },
  {
    caption: '牛客APP',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/niuke.webp',
    infoLink: 'https://m.nowcoder.com/app',
    pinned: true
  },
  {
    caption: '心悦俱乐部',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/xinyue.webp',
    infoLink: 'https://xinyue.qq.com/beta/#/',
    pinned: true
  },
  {
    caption: '轻聊',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/qingliao.png',
    infoLink: 'https://m.ruan8.com/soft/60397.html',
    pinned: true
  },
  {
    caption: '鹅剪',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/ejian.webp',
    infoLink: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.vcut',
    pinned: true
  },
  {
    caption: '红袖添香',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/hongxiu.png',
    infoLink: 'https://www.hongxiu.com/',
  },
  {
    caption: '央视频',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/yangvideo.png',
    infoLink: 'https://www.yangshipin.cn/',
  },
  {
    caption: '企鹅电竞',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/qiedianjing.jpeg',
    infoLink: 'https://egame.qq.com/',
  },
  {
    caption: 'FotoPlay',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/fotoplay.webp',
    infoLink: 'https://fotoplayapp.com/',
    pinned: true
  },
  {
    caption: '小睡眠',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/xiaoshuimian.webp',
    infoLink: 'http://psy-1.com/',
    pinned: true
  },
  {
    caption: 'Q音宝贝',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/qyingbaby.png',
    infoLink: '',
  },
  {
    caption: '欢遇',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/huanyu.png',
    infoLink: '',
  },
  {
    caption: '猫呼',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/catcall.png',
    infoLink: '',
  },
  {
    caption: '猜歌星球',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/caige.png',
    infoLink: 'https://caige.qq.com/',
  },
  {
    caption: 'Q音探歌',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/tangge.png',
    infoLink: '',
  },
  {
    caption: '相册管家',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/xianchemanager.png',
    infoLink: '',
  },
  {
    caption: '轻聊',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/qingliao.png',
    infoLink: '',
  },
  {
    caption: '波动星球',
     // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/bodongxingqiu.png',
    infoLink: '',
  },
];

const links = {
  "feature":[
    '/docs/pag-spec.html',
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
  separateCss: [
    "static/apis/android/stylesheet.css",
    "static/apis/ios/css/style.css",
    "static/apis/web/assets/style.css",
    "static/apis/web/assets/highlight.css",
    "static/apis/web/assets/icons.css",
  ],
  headerLinks: [
    {
      href:'/',label:'首页'
    },
    {
      href:'/docs/install.html',label:'设计师文档'
    },
    {
      href:'/docs/sdk.html',label:'开发者文档'
    },
    {
      href:'/case.html', label:'案例展示'
    },
    {
      href:'/docs/faq.html', label:'FAQ'
    },
    {
      href:'https://github.com/Tencent/libpag',label:'GitHub'
    },
    {
      href:'https://qm.qq.com/cgi-bin/qm/qr?k=Wa65DTnEKo2hnPsvY-1EgJOF8tvKQ-ZT&jump_from=webapi', label:'官方群',
    },
    {
      href:'/#download',label:'免费下载'
    }


    // {doc: 'pag-export', label: '文档'},
    // {doc: 'sdk-download', label: 'SDK下载'},
    // {href: '/api', label: 'API参考'},
    // {href: 'https://github.com/Tencent/libpag/issues/new/choose', label: '问题反馈'}
    //{ search: true },
    //{ languages: true }
  ],

  // If you have users set above, you add it here:
  users,
  links,
  faq,
  /* path to images for header/footer */
  headerIcon: "img/new_official_website/logo.png",
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
  scripts: ['/javascript/page.js',
            'https://buttons.github.io/buttons.js',
            'https://pag.qq.com/website/static/javascript/pagjs/pag.min.js',
            'https://cdn-go.cn/aegis/aegis-sdk/latest/aegis.min.js',
          ],
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
