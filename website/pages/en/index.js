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
        content: '可扩展的原生二进制文件格式，可做到同时向前向后兼容，图片等资源可直接集成于单文件内，并采用了极高压缩率的动态比特位存储技术。',
        image: imgUrl('pagfile.png'),
        imageAlign: 'right',
        imageWidth: 256,
        imageHeight: 256,
        title: '二进制文件',
      },
    ]}
  </Block>
);

const PAGEditing = () => (
  <Block>
    {[
      {
        content: '运行时可在保留动画效果前提下，任意动态修改文本内容字体大小样式或替换图片内容，实现丰富多样的动画内容定制效果。',
        image: imgUrl('editing.jpg'),
        imageAlign: 'left',
        imageWidth: 200,
        imageHeight: 266,
        title: '运行时编辑',
      },
    ]}
  </Block>
);

const PAGProfiler = () => (
  <Block background="light">
    {[
      {
        content: '能够量化展示每个动画文件所占用的显存大小，渲染耗时等一系列性能指标，帮助设计师制作效果和性能俱佳的动画特效。',
        image: imgUrl('profiler.jpg'),
        imageAlign: 'right',
        imageWidth: 280,
        imageHeight: 266,
        title: '性能监测',
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
      <h2>使用PAG动画方案构建的应用</h2>
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
          <PAGEditing />
          <PAGProfiler />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
