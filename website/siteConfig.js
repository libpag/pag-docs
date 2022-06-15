/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
// 规则：拥有 pinned: true 属性的users成员会出现在首页的logo墙版块
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
    caption: '哔哩哔哩',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/bilibili.webp',
    infoLink: 'https://www.bilibili.com/',
    pinned: true,
  },
  {
    caption: '腾讯新闻',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/tencentnews.webp',
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
    caption: '腾讯体育',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/tengxuntiyu.webp',
    infoLink: 'https://v.qq.com/x/live/sport.html',
  },
  {
    caption: '腾讯地图',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/tencentmap.webp',
    infoLink: 'https://map.qq.com/mobile/',
  },
  {
    caption: '全民K歌',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/kg.png',
    infoLink: 'https://kg.qq.com/index-pc.html',
  },
  {
    caption: 'NOW直播',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/now.png',
    infoLink: 'https://now.qq.com/',
  },
  {
    caption: '腾讯云',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/tencentcloud.png',
    infoLink: 'https://cloud.tencent.com/',
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
  },
  {
    caption: '天天P图',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/pitu.png',
    infoLink: 'https://tu.qq.com/',
  },
  {
    caption: 'QQ阅读',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/QQReader.png',
    infoLink: 'https://yuedu.reader.qq.com/common/common/down/dist/index.html?actid=11822',
  },
  {
    caption: 'WeSing',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/wesing.webp',
    infoLink: 'https://play.google.com/store/apps/details?id=com.tencent.wesing&hl=zh&gl=US',
  },
  {
    caption: '荔枝',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/lizhi.webp',
    infoLink: 'https://www.lizhi.fm/',
  },
  {
    caption: '微视',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/weishi.png',
    infoLink: 'https://weishi.qq.com/',
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
  },
  {
    caption: '王者营地',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/wangzheyingdi.webp',
    infoLink: 'https://sj.qq.com/myapp/detail.htm?apkName=com.tencent.gamehelper.smoba',
  },
  {
    caption: '心悦俱乐部',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/xinyue.webp',
    infoLink: 'https://xinyue.qq.com/beta/#/',
  },
  {
    caption: '长城汽车',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/changchengqiche.webp',
    infoLink: 'https://apps.apple.com/cn/app/%E9%95%BF%E5%9F%8E%E6%B1%BD%E8%BD%A6-%E4%BE%BF%E6%90%BA%E5%BC%8F%E8%AF%8A%E6%96%AD%E5%B7%A5%E5%85%B7/id1460223651',
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
  },
  {
    caption: '小睡眠',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/xiaoshuimian.webp',
    infoLink: 'http://psy-1.com/',
  },
  {
    caption: '鹅剪',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/ejian.webp',
    infoLink: 'https://a.app.qq.com/o/simple.jsp?pkgname=com.tencent.vcut',
  },
  {
    caption: '腾讯音兔',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/yintu.webp',
    infoLink: 'https://intoo.qq.com/',
  },
  {
    caption: '口袋节奏',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/koudaijiezou.webp',
    infoLink: 'https://apps.apple.com/cn/app/%E5%8F%A3%E8%A2%8B%E8%8A%82%E5%A5%8F/id1552355503',
  },
  {
    caption: 'JOOX Music',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/joox.webp',
    infoLink: 'https://play.google.com/store/apps/details?id=com.tencent.ibg.joox&hl=zh&gl=US',
  },
  {
    caption: 'doX',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/dox.webp',
    infoLink: 'https://apps.apple.com/cn/app/dox-%E5%8F%82%E4%B8%8E%E6%88%91%E4%BB%AC%E7%9A%84%E7%94%9F%E6%B4%BB/id1583688580',
  },
  {
    caption: 'TRTC',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/trtc.webp',
    infoLink: 'https://apps.apple.com/us/app/trtc/id1400663224',
  },
  {
    caption: '盯潮',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/dingchao.webp',
    infoLink: 'https://dingstock.com.cn/',
  },
  {
    caption: '话萌小说',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://pag.qq.com/website/static/img/huameng.png',
    infoLink: 'https://huameng.qidian.com/',
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
      // href:'/docs/faq/faq-1.html', label:'FAQ' // 侧边栏分类模式的FAQ版块
    },
    {
      href:'https://github.com/Tencent/libpag',label:'GitHub'
    },
    {
      href:'https://qm.qq.com/cgi-bin/qm/qr?k=Wa65DTnEKo2hnPsvY-1EgJOF8tvKQ-ZT&jump_from=webapi', label:'官方群',
    },
    {
      href:'/#download',label:'免费下载'
    },
    {
      href:'/player.html',label:'素材预览'
    },
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
            'https://cdn-go.cn/aegis/aegis-sdk/latest/aegis.min.js',
            'https://cdn.jsdelivr.net/npm/libpag@latest/lib/libpag.min.js'
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
