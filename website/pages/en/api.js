const React = require('react');
class Page extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {/* original part */}
                <div className="docMainWrapper wrapper" id='js_original_part'>
                    <div className="container mainContainer">
                        <div className="wrapper">
                            <div className="post">
                                <header className="postHeader">
                                    <h1 className="postHeaderTitle">API参考</h1>
                                </header>
                                <article>
                                    <div>
                                        <span>
                                            <p>最新版本的API文档请点击如下链接查看：</p>
                                            <p id='js_ios_doc'><font color="blue">iOS API文档</font></p>
                                            <p id='js_android_doc'><font color="blue">Android API文档</font></p>
                                        </span>
                                    </div>
                                </article>
                            </div>
                            <div className="docs-prevnext"></div>
                        </div>
                    </div>
                    <nav className="onPageNav"></nav>
                </div>

                {/* iframe part */}
                <div id='js_iframe_part' style={{width:"100%"}}>
                    <iframe id="ifame" style={{width:"100%"}}></iframe>
                </div>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        var iframe = document.getElementById('ifame');
                        var iosPathname = "/apis/ios/";
                        var androidPathname = "/apis/android/";
                        var innerDocClick = false;
                        var hasInit = false;
                        var isAndroid = function (){
                            return location.hash.indexOf('apis/android')>1;
                        }
                        document.onmouseover = function() { innerDocClick = true; }
                        document.onmouseleave = function() { innerDocClick = false; }
                        function formatUrl(loc){
                            return location.pathname + "#" + loc.pathname
                        }
                        function updateIframe (url,cb){
                            iframe.onload = function(){
                                iframe.style.height = Math.max(iframe.contentWindow.document.documentElement.scrollHeight,document.body.clientHeight) + 'px';
                                hasInit = true;
                                if(isAndroid()){
                                    var subFrame = location.hash.indexOf('allclasses-frame.html')>-1 
                                    ? 'org/libpag/package-summary.html#'
                                    : location.hash.split('/apis/android/')[1];
                                    if(iframe.contentDocument.getElementsByTagName('frameset')[0].children[1]){
                                        iframe.contentDocument.getElementsByTagName('frameset')[0].children[1].src = subFrame
                                    }
                                }
                            }
                            iframe.src = isAndroid() ? '/apis/android/' :url;
                        }
                        if(location.hash){ //初始化
                            document.getElementById('js_original_part').style.display = 'none';
                            updateIframe(location.hash.replace('#',''))
                        }
                        else{
                            hasInit = true;
                        }
                        document.getElementById('js_ios_doc').onclick = ()=>{ 
                            document.getElementById('js_original_part').style.display = 'none';
                            document.getElementById('js_iframe_part').style.display = 'block';
                            updateIframe(iosPathname)
                        }
                        document.getElementById('js_android_doc').onclick = ()=>{ 
                            document.getElementById('js_original_part').style.display = 'none';
                            document.getElementById('js_iframe_part').style.display = 'block';
                            updateIframe(androidPathname)
                        }
                        //监听子页面URL的变化事件，同步到壳的URL
                        window.addEventListener("message", function(e){
                            if(!hasInit || !innerDocClick){ //过滤掉浏览器的后退和初始化
                                return;
                            }
                            let url =  e.data && e.data.indexOf('iframe_url_change') === -1 ? "#"+e.data : formatUrl(iframe.contentWindow.location);
                            if(url.indexOf('package-summary.html')>-1
                            || url.indexOf('allclasses-frame.html')>-1){
                                return;
                            }
                            location.href = url;
                        }, false);
                        //URL的变化更新到Iframe
                        window.onhashchange = function(){
                            if(!innerDocClick || !hasInit){
                                return;
                            }
                            updateIframe(location.hash.replace('#',''))
                        }
                        `,
                    }}
                />
            </div>
        );
    }
  }
  
module.exports = Page;
