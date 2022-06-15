const React = require("react");

class Main extends React.Component {
  render() {
    return (
      <div className="pag-player">
        <div className="box" id="player-box">
          <div className="tip" id="player-tip">
            <img
              src="https://pag.qq.com/website/static/img/new_official_website/logo_l.png"
              width={64}
              height={64}
            ></img>
            <p className="text">
              拖动PAG文件到这里
              <br />
              或者
              <br />
              点击下方文字
            </p>
          </div>
          <canvas
            className="canvas"
            id="player-canvas"
            width={640}
            height={440}
          ></canvas>
          <button className="btn-load" id="player-btn-load">
            加载PAG文件
          </button>
          <input
            className="input-load"
            id="player-input-load"
            type="file"
            accept=".pag"
          ></input>
        </div>
      </div>
    );
  }
}

module.exports = Main;
