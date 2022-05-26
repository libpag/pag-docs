const React = require('react');
const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class Main extends React.Component {
    render() {
        return(
            <div class='playerMain'>
                <label for="fileInput">点此上传</label>
                <input id='fileInput' type='file'></input>
                <canvas id='pag' width={600} height={540}></canvas>
                <input id='playerSlider' type='range' step='any'></input>
            </div>
        )
    }
}

module.exports = Main;