"use strict";(self.webpackChunkfront_end_notes=self.webpackChunkfront_end_notes||[]).push([[631],{6713:(a,e,t)=>{t.r(e),t.d(e,{comp:()=>n,data:()=>i});var l=t(641);const h={},n=(0,t(6262).A)(h,[["render",function(a,e){return(0,l.uX)(),(0,l.CE)("div",null,e[0]||(e[0]=[(0,l.Fv)('<h1 id="八股文" tabindex="-1"><a class="header-anchor" href="#八股文"><span>八股文</span></a></h1><p>前端开发面试必背八股文</p><h2 id="day-1" tabindex="-1"><a class="header-anchor" href="#day-1"><span>day 1</span></a></h2><h3 id="osi-模型和-tcp-ip-模型" tabindex="-1"><a class="header-anchor" href="#osi-模型和-tcp-ip-模型"><span>OSI 模型和 TCP/IP 模型</span></a></h3><blockquote><p>理解 OSI 模型共有 7 层，能够说明是哪 7 层。<br> 能够粗浅描述每一层的基本功能和职责<br> 对于某些层，熟悉一些常见的协议，比如网络层的 IP，传输层的 TCP 和 UDP。</p></blockquote><p>osi模型是iso组织提出的一个计算机网络之间相互通信的模型，从下往上包括7个层次：<br> 应用层、表示层、会话层、传输层、网络层、数据链路层、物理层</p><p>osi模型更加系统，tcp/ip协议更加偏向实际，我们通常最常用的是tcp/ip协议。<br> 而tcp/ip协议只有四层，分别是：</p><p>应用层：对应osi模型当中的应用层、表示层、会话层，指的是应用程序和用户的交互接口，比如http（网页浏览）、ftp（文件传输） ，这一层我们是不用去关心数据是如何传输的，就像寄快递的时候不需要关心快递是如何运输的 传输层：对应osi的传输层，负责端到端的传输，传输协议有tcp，提供安全可靠的传输，确保数据传输的正确和完整性；udp协议，提供无连接的传输，及时性的传输</p><p>网络层：对应osi的网络层，协议是ip协议，负责数据包的路由和转发</p><h3 id="从输入url到页面展示发生了什么" tabindex="-1"><a class="header-anchor" href="#从输入url到页面展示发生了什么"><span>从输入URL到页面展示发生了什么</span></a></h3><h2 id="day-2" tabindex="-1"><a class="header-anchor" href="#day-2"><span>day 2</span></a></h2><h3 id="http请求报文和响应报文是怎样的" tabindex="-1"><a class="header-anchor" href="#http请求报文和响应报文是怎样的"><span>HTTP请求报文和响应报文是怎样的</span></a></h3><h3 id="http请求方式有哪些" tabindex="-1"><a class="header-anchor" href="#http请求方式有哪些"><span>HTTP请求方式有哪些</span></a></h3><h3 id="get请求和post请求的区别" tabindex="-1"><a class="header-anchor" href="#get请求和post请求的区别"><span>GET请求和POST请求的区别</span></a></h3><h2 id="day-3" tabindex="-1"><a class="header-anchor" href="#day-3"><span>day 3</span></a></h2><h3 id="http请求中常见的状态码" tabindex="-1"><a class="header-anchor" href="#http请求中常见的状态码"><span>HTTP请求中常见的状态码</span></a></h3><blockquote><p>掌握程度：<br> ● 状态码：能够根据1xx、2xx、3xx、4xx、5xx分类描述状态码，并对每个类别中的常见状态码能够解释其含义和使用场景。<br> ● 缓存：知道3xx状态码中的重定向是如何工作的。<br> ● 进阶：能够结合实际案例来讨论状态码的使用。</p></blockquote><h3 id="什么是强缓存和协商缓存" tabindex="-1"><a class="header-anchor" href="#什么是强缓存和协商缓存"><span>什么是强缓存和协商缓存</span></a></h3><blockquote><p>● 基本概念：区分强缓存和协商缓存的概念，并解释它们的不同用途。<br> ● 工作流程: 能够描述浏览器和服务器在强缓存和协商缓存中如何交互。<br> ● HTTP头部字段: 知道实现强缓存和协商缓存的HTTP头部字段，如 Cache-Control, Last-Modified, ETag, If-Modified-Since, If-None-Match。<br> ● 性能优化: 理解缓存机制如何提高Web应用的性能和用户体验。</p></blockquote>',19)]))}]]),i=JSON.parse('{"path":"/posts/%E5%85%AB%E8%82%A1%E6%96%87.html","title":"八股文","lang":"zh-CN","frontmatter":{"date":"2020-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"sticky":10},"headers":[{"level":2,"title":"day 1","slug":"day-1","link":"#day-1","children":[{"level":3,"title":"OSI 模型和 TCP/IP 模型","slug":"osi-模型和-tcp-ip-模型","link":"#osi-模型和-tcp-ip-模型","children":[]},{"level":3,"title":"从输入URL到页面展示发生了什么","slug":"从输入url到页面展示发生了什么","link":"#从输入url到页面展示发生了什么","children":[]}]},{"level":2,"title":"day 2","slug":"day-2","link":"#day-2","children":[{"level":3,"title":"HTTP请求报文和响应报文是怎样的","slug":"http请求报文和响应报文是怎样的","link":"#http请求报文和响应报文是怎样的","children":[]},{"level":3,"title":"HTTP请求方式有哪些","slug":"http请求方式有哪些","link":"#http请求方式有哪些","children":[]},{"level":3,"title":"GET请求和POST请求的区别","slug":"get请求和post请求的区别","link":"#get请求和post请求的区别","children":[]}]},{"level":2,"title":"day 3","slug":"day-3","link":"#day-3","children":[{"level":3,"title":"HTTP请求中常见的状态码","slug":"http请求中常见的状态码","link":"#http请求中常见的状态码","children":[]},{"level":3,"title":"什么是强缓存和协商缓存","slug":"什么是强缓存和协商缓存","link":"#什么是强缓存和协商缓存","children":[]}]}],"git":{"updatedTime":1731066117000,"contributors":[{"name":"namewyf","email":"wyf19892552132@163.com","commits":2}]},"filePathRelative":"posts/八股文.md","excerpt":"\\n<p>前端开发面试必背八股文</p>\\n"}')}}]);