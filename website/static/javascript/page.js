const caseVideo = {
    HEIGHT: 640,
    WIDTH: 360,
}

const caseBox = {
    HEIGHT: 1080,
    WIDTH: 460,
}

window.onload = async () => {
    // PAG -> Canvas convert
    const options = {
        repeatCount: 0,
        renderingMode: 'Canvas',
        scaleMode: 'LetterBox',
    }
    const canvases = document.getElementsByClassName('pagView');
    for (let i = 0; i< canvases.length; i++) {
        canvases[i].width = canvases[i].clientWidth;
        canvases[i].height = canvases[i].height * canvases[i].clientWidth / canvases[i].width;
        const mp4Data = await PAG.PAGFile.loadFile(`../pag/${i+1}.pag`);
        const pagView = await PAG.PAGView.create(mp4Data, canvases[i], options);
        pagView.play();
    }
    // 案例展示版块添加动态交互效果
    if (location.pathname.indexOf('/case') == 0) {
        // luxy.init();
        addInteractEffect();
    } 
}

window.onresize = () => {
    addInteractEffect();
}


let isAndroid = () => {
    return /(Android).*?([\d.]+)/i.test(navigator.userAgent) || /(Adr)\s+([\d.]+)/i.test(navigator.userAgent);
};
let isIOS = () => {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
    // return /(iPhone\sOS)\s([\d_]+)/i.test(navigator.userAgent);
};
let isMobile = () => isAndroid() || isIOS();
let isIndexPage = () => location.pathname === '/' || location.pathname === '/index' || location.pathname === ''
function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
function appendMeta(){
    var oMeta = document.createElement('meta');
    oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=0';
    oMeta.name = 'viewport';
    document.getElementsByTagName('head')[0].appendChild(oMeta);
}
docReady(()=>{
    if(isMobile()){
        var html = document.getElementsByTagName("html")[0]; html.style.fontSize =
        Math.min(  document.documentElement.clientWidth / 375 * 75 ,80) + "px";
        document.body.classList.add('mobile-mode')
        appendMeta();
        if(isIndexPage()){
            document.body.style.backgroundImage = "url('/img/new_official_website/bg_m.png')"
        }
        function appendNav(){
            var header = document.getElementsByClassName('fixedHeaderContainer')[0]
            var node=document.createElement("div");
            node.id='js_nav'
            node.className='nav-icon';
            header.children[0].appendChild(node)
            document.getElementById('js_nav').onclick = function(){
                let close = node.classList.contains('expand')
                if(close){
                    node.classList.remove('expand')
                }
                else {
                    node.classList.add('expand')
                }
                var menu = document.getElementsByClassName('nav-site-internal')[0]
                var box = document.getElementsByClassName('slidingNav')[0]
                var header = document.getElementsByClassName('fixedHeaderContainer')[0];
                var nav =  document.getElementsByClassName('nav-site')[0];
                header.style.backdropFilter = close ? 'saturate(180%) blur(20px)' : 'none';
                nav.style.backdropFilter = close ? 'none' :'saturate(180%) blur(20px)';
                box.style.height = close ? '0' : window.innerHeight+'px';
                menu.style.display = close ? 'none' : 'block';
            }
        }
        appendNav()
        function appendMenu(){
            var bottomBar = document.getElementsByClassName('docs-prevnext')[0]
            if(bottomBar){
                var node=document.createElement("div");
                node.id='js_category'
                node.className='category-icon';
                bottomBar.appendChild(node)
                document.getElementById('js_category').onclick = function(){
                    let docNav = document.getElementById('docsNav');
                    let close = docNav.classList.contains('docsSliderActive');
                    if(close){
                        docNav.classList.remove('docsSliderActive')
                    }
                    else{
                        docNav.classList.add('docsSliderActive')
                    }
                }
            }
        }
        appendMenu()
    }
    else{
        if(isIndexPage()){
            document.body.style.backgroundImage = "url('/img/new_official_website/fill1.png')"
        }
        document.body.classList.add('pc-mode')
    }
    //append git/QQ group icon
    function appendBottomNav(){
        var footer = document.getElementById('footer');
        footer.children[0].innerHTML = '';
        // copyright
        var copyright = document.createElement("div"); 
        copyright.innerText = 'Copyright © 2020 pag.io'
        footer.children[0].appendChild(copyright)

        //qq group
        var qqgroup = document.createElement("div");
        // qqgroup.id = 'js_qqgroup'
        qqgroup.className='qq-group-icon js_qqgroup';
        qqgroup.innerText = 'QQ 群: 893379574';
        footer.children[0].appendChild(qqgroup)
        // document.getElementById('js_qqgroup').onclick = function(){
        //     window.open('https://qm.qq.com/cgi-bin/qm/qr?k=Wa65DTnEKo2hnPsvY-1EgJOF8tvKQ-ZT&jump_from=webapi')
        // }
        var qgroupbtn = document.getElementsByClassName('js_qqgroup');
        for (var i=0; i < qgroupbtn.length; i++) {
            qgroupbtn[i].onclick = function(){
                window.open('https://qm.qq.com/cgi-bin/qm/qr?k=Wa65DTnEKo2hnPsvY-1EgJOF8tvKQ-ZT&jump_from=webapi')
            }
        };
        
        // git
        var git = document.createElement("div"); 
        git.id = 'js_git'
        git.className='git-icon';
        footer.children[0].appendChild(git)
        document.getElementById('js_git').onclick = function(){
            location.href = '//github.com/libpag/libpag'
        }
    }
    appendBottomNav()
    var btns = document.getElementsByClassName('download-btn');
    
    for (var i=0; i < btns.length; i++) {
        btns[i].onclick = function(){
            var pkg = document.getElementsByClassName('pkg-download')[0];
            pkg.scrollIntoView()
        }
    };

    var pathname = location.pathname
    if( pathname == '/' ){
        document.getElementsByClassName('nav-site')[0].children[0].classList.add('active')
    }
    else if(pathname.indexOf('/docs') == 0){
        document.getElementsByClassName('nav-site')[0].children[1].classList.add('active')
    }
    else if(pathname.indexOf('/api') == 0){
        document.getElementsByClassName('nav-site')[0].children[2].classList.add('active')
    }
    else if(pathname.indexOf('/case') == 0){
        document.getElementsByClassName('nav-site')[0].children[3].classList.add('active')
    }
})

function addInteractEffect() {
    document.documentElement.scrollTop = 0;
    
    if (isMobile()) {
        document.getElementById('progressBar').style.display = 'none';
    }

    let titles = document.getElementsByClassName('titleBox');
    let marks = document.getElementsByClassName('mark');

    window.addEventListener('scroll', function() {
        let idx = parseInt(document.documentElement.scrollTop / caseBox.HEIGHT, 10);
        let microProgress = (document.documentElement.scrollTop / (document.body.clientHeight * 2 - 3400)).toFixed(2);
        let titleOffset = titles[idx].getBoundingClientRect().top - 90;

        if (titleOffset < 0) {
            titles[idx].style = `opacity: ${1 + 0.018 * titleOffset}`;
        } else {
            titles[idx].style = 'opacity: 1';
        }
        // 进度条更新
        for (let i = 0; i< marks.length; i++) {
            if (i <= idx) {
                marks[i].className = 'mark active';
            } else {
                marks[i].className = 'mark';
            }
        }
        console.log("microProgress: " + microProgress);
        let bg = `linear-gradient(#333333 0%, rgb(216, 216, 216) ${microProgress * 100}%)`;
        document.getElementById('progressBar').style.background = bg;

    }, { passive: false });
}

function absoluteTop(element) {
    var top = 0;
    do {
        top += element.offsetTop  || 0;
        element = element.offsetParent;
    } while(element);

    return top
};