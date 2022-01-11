const React = require('react');
const siteConfig = require(`${process.cwd()}/siteConfig.js`);

class Main extends React.Component {
    render() {
        return(
            <div class = 'caseMain' id='luxy'>
                <div id='wallpaper'></div>
                <div class='caseWrapper'>
                    {
                        [{
                            mainTitle: '发挥无限创意',
                            subTitle: '丰富的特效支持，满足2D/3D使用，助力创意更多可能性',
                        },{
                            mainTitle: '特效大片任意做',
                            subTitle: '全AE特效支持，爆款模版唾手可得',
                        },{
                            mainTitle: '放大游戏快感',
                            subTitle: '不限机型不耗性能，多视角大片运镜记录游戏高光时刻',
                        },{
                            mainTitle: '自由编辑动态效果',
                            subTitle: '全能易操作，剪辑体验酣畅淋漓',
                        }
                        ,{
                            mainTitle: '增强广告效果',
                            subTitle: '低门槛商品素材一键导入，促销大片立刻呈现',
                        }
                        ,{
                            mainTitle: '丰富视觉体验',
                            subTitle: '动画文件使用更便捷，体积小性能好',
                        }
                        ,{
                            mainTitle: '直播氛围拉满',
                            subTitle: '全面支持礼物设计，精彩创意等你探索',
                        }
                        ,{
                            mainTitle: '无负担极速上线',
                            subTitle: 'H5动画、文字、音乐轻松上线，让营销变的简单',
                        }].map((unit, idx) => {
                            let index = idx < 9? `0${idx+1}`: `${idx+1}`;
                            let video = `https://videorendertvh5.cdp.qq.com/pagiocase_${index}.mp4`
                            let poster = `/img/poster/${index}.png`
                            return(
                                <Chapter
                                    idx = {idx}
                                    mainTitle = {unit.mainTitle}
                                    subTitle = {unit.subTitle}
                                    video = {video}
                                    poster = {poster}
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
        const {mainTitle, subTitle, video, poster} = this.props
        return(
            <div class='caseBox'>
                <div class='case'>
                    <div class='titleBox'>
                        <center><p class='mainTitle'>{mainTitle}</p></center>
                        <center><p class='subTitle'>{subTitle}</p></center>
                    </div>
                    <div class='videoBox'>
                        <video class='video' src={video} poster={poster} preload muted autoPlay playsInline loop></video>
                    </div>
                    
                </div>
            </div>
        )
    }
}

class ProgressBar extends React.Component {
    render() {
       
        return(
            <div id='progressBox'>
                <ul id='progressUl'>
                    {
                        ['拍摄道具',
                        '视频模版',
                        '游戏战报',
                        '视频编辑',
                        '视频广告',
                        'UI 动画',
                        '直播打赏',
                        '运营活动',
                                ].map((mark, idx) => {
                            return (
                                <li class='mark' idx={idx}>{mark}</li>
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