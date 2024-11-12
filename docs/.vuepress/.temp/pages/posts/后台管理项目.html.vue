<template><div><h1 id="后台管理项目" tabindex="-1"><a class="header-anchor" href="#后台管理项目"><span>后台管理项目</span></a></h1>
<p>基于elementui、vue3的后台管理项目</p>
<!-- more -->
<h2 id="前端架构设计" tabindex="-1"><a class="header-anchor" href="#前端架构设计"><span>前端架构设计</span></a></h2>
<h3 id="_2-8-axios二次封装-下" tabindex="-1"><a class="header-anchor" href="#_2-8-axios二次封装-下"><span>2-8 axios二次封装（下）</span></a></h3>
<p>构造好request的封装函数后在main.js里进行全局挂载之后才能在组件进行全局使用</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">'./uitils/request'</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$request <span class="token operator">=</span> request</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在js里request和request()是不同的，request是将request函数本身赋值给app.config.globalProperties.$request
如果说是request()则是先执行request然后将返回值赋值给app.config.globalProperties.$request</p>
</blockquote>
</div></template>


