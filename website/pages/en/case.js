const React = require('react');
const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class Main extends React.Component {
    render() {
        return(
            <div class = 'main' id='luxy'>
                <div class='wrapper'>
                    {
                        [{
                            mainTitle: '发挥无限创意',
                            subTitle: '丰富的特效支持，满足2D/3D使用，助力创意更多可能性',
                            video: '/video/case_1.mov'
                        },{
                            mainTitle: '特效大片任意做',
                            subTitle: '全AE特效支持，爆款模版唾手可得',
                            video: '/video/case_1.mov'
                        },{
                            mainTitle: '放大游戏快感',
                            subTitle: '不限机型不耗性能，多视角大片运镜记录游戏高光时刻',
                            video: '/video/case_1.mov'
                        },{
                            mainTitle: 'NULL',
                            subTitle: 'null',
                            video: '/video/case_1.mov'
                        }].map((unit, idx) => {
                            return(
                                <Chapter
                                    idx = {idx}
                                    mainTitle = {unit.mainTitle}
                                    subTitle = {unit.subTitle}
                                    video = {unit.video}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

class Chapter extends React.Component {
    render() {
        const {idx, mainTitle, subTitle, video} = this.props
        return(
            <div class='caseBox'>
                <div class='case'>
                    <div class='titleBox'>
                        <center><p class='mainTitle'>{mainTitle}</p></center>
                        <center><p class='subTitle'>{subTitle}</p></center>
                    </div>
                    <div class='videoBox'>
                        <video class='video' autoplay="autoplay" muted loop>
                            <source src={video} />
                        </video>
                    </div>
                    
                </div>
            </div>
        )
    }
}

class ProgressBar extends React.Component {
    render() {
       
        return(
            <div class='progressBox'>
                <div id='progressBar'></div>
                <ul class='progressUl'>
                    {
                        ['拍摄道具',
                        '视频模版',
                        '游戏战报',
                        '视频编辑',
                        '视频广告',
                        'UI 动画',
                        '直播打赏',
                        '运营活动',].map((mark) => {
                            return (
                                <li class='mark'>{mark}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

class ShowCase extends React.Component {
    render() {
        return(
            <div class='showCase-container'>
                <Main/>
                <ProgressBar/>
            </div>
        );
    }
}

module.exports = ShowCase;