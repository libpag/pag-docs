/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class Users extends React.Component {
  render() {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>使用PAG动画方案构建的应用</h1>
              <p>PAG动画方案为这些应用引入了高性能且易用的动画工作流</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>你的产品正在使用PAG动画方案?</p>
            <a href="https://github.com/libpag/pag-docs/blob/master/website/siteConfig.js" className="button">
              提交你的应用
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
