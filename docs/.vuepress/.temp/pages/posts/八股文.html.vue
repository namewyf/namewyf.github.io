<template><div><h1 id="八股文" tabindex="-1"><a class="header-anchor" href="#八股文"><span>八股文</span></a></h1>
<p>前端开发面试必背八股文</p>
<!-- more -->
<h2 id="day-1" tabindex="-1"><a class="header-anchor" href="#day-1"><span>day 1</span></a></h2>
<h3 id="osi-模型和-tcp-ip-模型" tabindex="-1"><a class="header-anchor" href="#osi-模型和-tcp-ip-模型"><span>OSI 模型和 TCP/IP 模型</span></a></h3>
<blockquote>
<p>理解 OSI 模型共有 7 层，能够说明是哪 7 层。<br>
能够粗浅描述每一层的基本功能和职责<br>
对于某些层，熟悉一些常见的协议，比如网络层的 IP，传输层的 TCP 和 UDP。</p>
</blockquote>
<p>osi模型是iso组织提出的一个计算机网络之间相互通信的模型，从下往上包括7个层次：<br>
应用层、表示层、会话层、传输层、网络层、数据链路层、物理层</p>
<p>osi模型更加系统，tcp/ip协议更加偏向实际，我们通常最常用的是tcp/ip协议。<br>
而tcp/ip协议只有四层，分别是：</p>
<p>应用层：对应osi模型当中的应用层、表示层、会话层，指的是应用程序和用户的交互接口，比如http（网页浏览）、ftp（文件传输） ，这一层我们是不用去关心数据是如何传输的，就像寄快递的时候不需要关心快递是如何运输的
传输层：对应osi的传输层，负责端到端的传输，传输协议有tcp，提供安全可靠的传输，确保数据传输的正确和完整性；udp协议，提供无连接的传输，及时性的传输</p>
<p>网络层：对应osi的网络层，协议是ip协议，负责数据包的路由和转发</p>
<h3 id="从输入url到页面展示发生了什么" tabindex="-1"><a class="header-anchor" href="#从输入url到页面展示发生了什么"><span>从输入URL到页面展示发生了什么</span></a></h3>
<h2 id="day-2" tabindex="-1"><a class="header-anchor" href="#day-2"><span>day 2</span></a></h2>
<h3 id="http请求报文和响应报文是怎样的" tabindex="-1"><a class="header-anchor" href="#http请求报文和响应报文是怎样的"><span>HTTP请求报文和响应报文是怎样的</span></a></h3>
<h3 id="http请求方式有哪些" tabindex="-1"><a class="header-anchor" href="#http请求方式有哪些"><span>HTTP请求方式有哪些</span></a></h3>
<h3 id="get请求和post请求的区别" tabindex="-1"><a class="header-anchor" href="#get请求和post请求的区别"><span>GET请求和POST请求的区别</span></a></h3>
<h2 id="day-3" tabindex="-1"><a class="header-anchor" href="#day-3"><span>day 3</span></a></h2>
<h3 id="http请求中常见的状态码" tabindex="-1"><a class="header-anchor" href="#http请求中常见的状态码"><span>HTTP请求中常见的状态码</span></a></h3>
<blockquote>
<p>掌握程度：<br>
● 状态码：能够根据1xx、2xx、3xx、4xx、5xx分类描述状态码，并对每个类别中的常见状态码能够解释其含义和使用场景。<br>
● 缓存：知道3xx状态码中的重定向是如何工作的。<br>
● 进阶：能够结合实际案例来讨论状态码的使用。</p>
</blockquote>
<h3 id="什么是强缓存和协商缓存" tabindex="-1"><a class="header-anchor" href="#什么是强缓存和协商缓存"><span>什么是强缓存和协商缓存</span></a></h3>
<blockquote>
<p>● 基本概念：区分强缓存和协商缓存的概念，并解释它们的不同用途。<br>
● 工作流程: 能够描述浏览器和服务器在强缓存和协商缓存中如何交互。<br>
● HTTP头部字段: 知道实现强缓存和协商缓存的HTTP头部字段，如 Cache-Control, Last-Modified, ETag, If-Modified-Since, If-None-Match。<br>
● 性能优化: 理解缓存机制如何提高Web应用的性能和用户体验。</p>
</blockquote>
<h2 id="day-5" tabindex="-1"><a class="header-anchor" href="#day-5"><span>day 5</span></a></h2>
<h3 id="https和http有哪些区别" tabindex="-1"><a class="header-anchor" href="#https和http有哪些区别"><span>HTTPS和HTTP有哪些区别</span></a></h3>
<p>https在http基础上加上了ssl/tls加密，保证安全，而http是明文传输的<br>
https需要向服务器申请CA证书<br>
http的默认端口是80，https是443</p>
<h3 id="https的工作原理-https建立连接的过程" tabindex="-1"><a class="header-anchor" href="#https的工作原理-https建立连接的过程"><span>HTTPS的工作原理(HTTPS建立连接的过程)</span></a></h3>
<p>https的握手本质就是tls的握手，是一回事</p>
<ol>
<li>首先客户端发送请求给服务端，请求包括版本号、一个随机数和客户端的加密方法</li>
<li>收到请求后，紧接着服务器确认双方使用的加密方法、给出数字证书和一个随机数</li>
<li>客户端会确认数字证书是否有效，并生成一个新的随机数，用数字证书里的公钥加密后发给服务端，并且还会提供前面所有内容的哈希值，给服务器校验</li>
<li>服务器使用自己的私钥解密发过来的随机数</li>
<li>客户端和服务端根据约定的加密方法，使用前面使用的三个随机数，生成对话密钥，通过这个密钥来加密通话</li>
</ol>
<h3 id="tcp和udp的区别" tabindex="-1"><a class="header-anchor" href="#tcp和udp的区别"><span>TCP和UDP的区别</span></a></h3>
<ol>
<li>tcp是面向连接的协议，而udp是无连接的</li>
<li>tcp能够确保数据的传输完整性，而udp可能出现丢包</li>
<li>tcp有拥塞控制机制，根据网络状况调整传输速度，而udp没有拥塞控制，通常发送速度恒定</li>
<li>tcp有数据连接，拥塞控制等等，性能开销大，而udp的性能开销小</li>
<li>tcp的报文头部包括序列号、确认号等信息，而udp报文的头部相对简单</li>
</ol>
<h2 id="day-6" tabindex="-1"><a class="header-anchor" href="#day-6"><span>day 6</span></a></h2>
<h3 id="tcp连接如何确保可靠性" tabindex="-1"><a class="header-anchor" href="#tcp连接如何确保可靠性"><span>TCP连接如何确保可靠性</span></a></h3>
<blockquote>
<p>掌握程度：
● 能够清晰地描述TCP协议的工作原理和关键特性。
● 理解TCP如何通过各种机制确保数据传输的可靠性。
○ 连接管理：三次握手，四次挥手
○ 差错控制：序列号和确认应答机制
○ 超时重传机制
○ 流量控制
○ 拥塞控制
● 知道TCP的流量控制和拥塞控制对于网络性能的影响。</p>
</blockquote>
<h3 id="tcp-拥塞控制机制" tabindex="-1"><a class="header-anchor" href="#tcp-拥塞控制机制"><span>TCP 拥塞控制机制</span></a></h3>
<blockquote>
<p>掌握程度：<br>
● 能够解释为什么需要拥塞控制，即动态调整数据的发送速率，防止网络过载，保证网络的稳定和高效。<br>
● 掌握拥塞控制的主要算法<br>
○ 慢启动：开始时，发送窗口大小逐渐增加，直到达到一个阈值。<br>
○ 拥塞避免：超过阈值后，窗口大小增长速度减慢，采用线性增长。<br>
○ 快重传：当接收方检测到失序的包时，立即发送重复确认，触发发送方进行重传。<br>
○ 快恢复：在快重传后，不立即回到慢启动状态，而是尝试继续以当前窗口大小发送。</p>
</blockquote>
<h3 id="tcp-流量控制机制" tabindex="-1"><a class="header-anchor" href="#tcp-流量控制机制"><span>TCP 流量控制机制</span></a></h3>
<blockquote>
<p>掌握程度<br>
● 能够解释流量控制的目的。能够清晰地描述TCP流量控制的基本工作原理和关键组件。<br>
● 知道 TCP 是使用滑动窗口机制来实现流量控制，理解TCP滑动窗口协议的工作原理，包括窗口大小的通告和更新<br>
● 知道流量控制与拥塞控制的区别和它们在TCP中的作用。<br>
● 了解TCP报文结构，特别是与流量控制相关的字段。</p>
</blockquote>
<h3 id="udp怎么实现可靠传输" tabindex="-1"><a class="header-anchor" href="#udp怎么实现可靠传输"><span>UDP怎么实现可靠传输</span></a></h3>
</div></template>


