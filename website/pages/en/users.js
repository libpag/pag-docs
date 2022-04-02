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
class Download extends React.Component{
  render(){
    return (
      <div class='download'>
        <div class='wrap'>
          <div class='pkg'>
            <span class='pkg-download'></span>
            <a class='mac-download' href={siteConfig.links.download.mac}></a>
            <a class='win-download' href={siteConfig.links.download.win}></a>
          </div>
        </div>
      </div>
    )
  }
}

class Users extends React.Component {
  render() {
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
        <div class='name'>{user.caption}</div>
      </a>
    ));

    return (
      <div className="mainContainer usersContainer">
        <Container padding={['bottom', 'top']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>他们都在使用……</h1>
            </div>
            <div className="logos">
              {showcase}
              <a class='contact js_qqgroup'>
                <img src='https://pag.qq.com/website/static/img/new_official_website/contact_us.png'/>
                <div class='name'>正在使用 PAG?</div>
                <div class='ts'>告诉我们</div>
              </a>
            </div>
            {/* <p>正在使用PAG动画方案?</p>
            <a href="https://github.com/libpag/pag-docs/blob/master/website/siteConfig.js" className="button">
              提交你的应用
            </a> */}

          </div>
        </Container>
        <Download/>
      </div>
    );
  }
}

module.exports = Users;
