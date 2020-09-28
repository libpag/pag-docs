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
    //append git icon
    function appendGit(){
        var footer = document.getElementById('footer');
        var node=document.createElement("div"); //创建一个li节点
        node.id='js_git'
        node.className='git-icon';
        footer.children[0].appendChild(node)
        document.getElementById('js_git').onclick = function(){
            location.href = '//github.com/libpag/libpag.github.io'
        }
    }
    appendGit()
})