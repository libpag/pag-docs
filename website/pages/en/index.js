/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <img width="128" height="128" src={imgUrl('pag-256x256.png')} />
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('install.html', language)}>安装插件</Button>
            <Button href={docUrl('sdk.html', language)}>接入SDK</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const classNames = require('classnames');

class GridBlock extends React.Component {
  renderBlock(block) {
    const blockClasses = classNames('blockElement', this.props.className, {
      alignCenter: this.props.align === 'center',
      alignRight: this.props.align === 'right',
      fourByGridBlock: this.props.layout === 'fourColumn',
      imageAlignSide:
        block.image &&
        (block.imageAlign === 'left' || block.imageAlign === 'right'),
      imageAlignTop: block.image && block.imageAlign === 'top',
      imageAlignRight: block.image && block.imageAlign === 'right',
      imageAlignBottom: block.image && block.imageAlign === 'bottom',
      imageAlignLeft: block.image && block.imageAlign === 'left',
      threeByGridBlock: this.props.layout === 'threeColumn',
      twoByGridBlock: this.props.layout === 'twoColumn',
    });

    const topLeftImage =
      (block.imageAlign === 'top' || block.imageAlign === 'left') &&
      this.renderBlockImage(block.image, block.imageLink, block.imageAlt, block.imageWidth, block.imageHeight);

    const bottomRightImage =
      (block.imageAlign === 'bottom' || block.imageAlign === 'right') &&
      this.renderBlockImage(block.image, block.imageLink, block.imageAlt, block.imageWidth, block.imageHeight);

    return (
      <div className={blockClasses} key={block.title}>
        {topLeftImage}
        <div className="blockContent">
          {this.renderBlockTitle(block.title)}
          <MarkdownBlock>{block.content}</MarkdownBlock>
        </div>
        {bottomRightImage}
      </div>
    );
  }

  renderBlockImage(image, imageLink, imageAlt, imageWidth, imageHeight) {
    if (!image) {
      return null;
    }

    return (
      <div className="blockImage">
        {imageLink ? (
          <a href={imageLink}>
            <img src={image} alt={imageAlt} width={imageWidth} height={imageHeight} />
          </a>
        ) : (
          <img src={image} alt={imageAlt} width={imageWidth} height={imageHeight} />
        )}
      </div>
    );
  }

  renderBlockTitle(title) {
    if (!title) {
      return null;
    }

    return (
      <h2>
        <MarkdownBlock>{title}</MarkdownBlock>
      </h2>
    );
  }

  render() {
    return (
      <div className="gridBlock">
        {this.props.contents.map(this.renderBlock, this)}
      </div>
    );
  }
}

GridBlock.defaultProps = {
  align: 'left',
  contents: [],
  layout: 'twoColumn',
};

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const PAGFile = () => (
  <Block background="light">
    {[
      {
        content: '采用可扩展的二进制文件格式，可单文件集成图片等任意资源实现快速交付。导出相同的AE动画内容，在文件解码速度和压缩率上均大幅领先于同类型方案。',
        image: imgUrl('pagfile.png'),
        imageAlign: 'right',
        imageWidth: 256,
        imageHeight: 256,
        title: '高效动画文件',
      },
    ]}
  </Block>
);

const AESupport = () => (
  <Block>
    {[
      {
        content: '不仅在纯矢量导出方式上支持更多的AE特性，还引入了视频序列帧结合矢量的混合导出能力，实现支持所有AE特性的同时又能保持动画运行时的可编辑性。',
        image: imgUrl('ae.png'),
        imageAlign: 'left',
        imageWidth: 211,
        imageHeight: 206,
        title: '全AE特性支持',
      },
    ]}
  </Block>
);

const DesktopTools = () => (
  <Block background="light">
    {[
      {
        content: '提供从导出插件到桌面预览等一系列完善的桌面效率工具，让设计师可以所见即所得地生产素材，无需研发介入还原效果，极大简化了设计跟研发对接的成本。',
        image: imgUrl('desktop.png'),
        imageAlign: 'right',
        imageWidth: 357,
        imageHeight: 265,
        title: '桌面工具完善',
      },
    ]}
  </Block>
);

const PAGProfiler = () => (
  <Block>
    {[
      {
        content: '通过导出插件内置的自动优化策略，以及预览工具集成的性能监测面板，能够可视化地看到每个素材的性能状态，帮助设计师制作效果和性能俱佳的动画特效。',
        image: imgUrl('profiler.jpg'),
        imageAlign: 'left',
        imageWidth: 262.5,
        imageHeight: 266,
        title: '可视化性能监测',
      },
    ]}
  </Block>
);

const Editing = () => (
  <Block background="light">
    {[
      {
        content: '运行时可在保留动画效果前提下，动态修改替换文本或替换占位图内容，甚至对任意子图层进行增删改及移动，轻松实现照片和视频模板等素材的批量化生产。',
        image: imgUrl('template.jpg'),
        imageAlign: 'right',
        imageWidth: 260,
        imageHeight: 368,
        title: '运行时可编辑',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>使用PAG动画方案的应用</h2>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          更多应用
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <PAGFile />
          <AESupport />
          <DesktopTools />
          <PAGProfiler />
          <Editing />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
