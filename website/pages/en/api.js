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
                                            <p>历史版本的API文档可以通过 <a href="/docs/sdk.html"><font color="blue">RDM</font></a> 的自动构建下载获取，最新版本的API文档请点击如下链接查看：</p>
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
                        document.onmouseover = function() { innerDocClick = true; }
                        document.onmouseleave = function() { innerDocClick = false; }
                        function formatUrl(loc){
                            return location.pathname + "#" + loc.pathname
                            // return loc.pathname + (loc.hash ? loc.hash : '');
                        }
                        var initHash = location.hash;
                        function updateIframe (url){
                            iframe.onload = function(){
                                iframe.style.height = Math.max(iframe.contentWindow.document.documentElement.scrollHeight,document.body.clientHeight) + 'px';
                            }
                            iframe.src = url;
                        }
                        if(initHash){
                            document.getElementById('js_original_part').style.display = 'none';
                            updateIframe(initHash.replace('#',''))
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
                        window.addEventListener("message", function(e){
                            // history.pushState({},'', formatUrl(iframe.contentWindow.location))
                            // location.href = location.pathname + "#" + iframe.contentWindow.location.pathname
                            location.href = e.data && e.data.indexOf('iframe_url_change') === -1 ? "#"+e.data : formatUrl(iframe.contentWindow.location);
                        }, false);
                        // window.onpopstate = function(event) {
                        //     if(document.location.pathname !== '/api.html'){
                        //         iframe.contentWindow.location.pathname = document.location.pathname;
                        //     }
                        // };
                        window.onhashchange = function(){
                            if(innerDocClick){
                                return
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
