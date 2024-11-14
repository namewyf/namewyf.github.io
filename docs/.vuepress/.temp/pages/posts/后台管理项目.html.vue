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
<p>封装完成后，就能在组件里面调用了</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$request</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">'get'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/login'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'jack'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"res="</span><span class="token punctuation">,</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了更加方便的进行调用，我们还可以把request函数转换成一个对象，这个对象里有各种请求的方法</p>
<p>request.js</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">[</span><span class="token string">'get'</span><span class="token punctuation">,</span> <span class="token string">'post'</span><span class="token punctuation">,</span> <span class="token string">'put'</span><span class="token punctuation">,</span> <span class="token string">'delete'</span><span class="token punctuation">,</span> <span class="token string">'patch'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    request<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token comment">//options可以对请求的参数做一些额外的拓展，比如可以传mock:true,或者loading之类的东西</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            url<span class="token punctuation">,</span></span>
<span class="line">            data<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">method</span><span class="token operator">:</span> item<span class="token punctuation">,</span></span>
<span class="line">            <span class="token operator">...</span>options</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<ol>
<li>这个地方非常巧妙地把函数request转换为对象request，并且把多个属性添加到request对象里，属性的值是函数</li>
<li>options可以对请求的参数做一些额外的拓展，比如可以传mock:true,或者loading:true之类的东西</li>
</ol>
</blockquote>
<p>login.vue</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>$request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'jack'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-storage二次封装" tabindex="-1"><a class="header-anchor" href="#_2-9-storage二次封装"><span>2-9 storage二次封装</span></a></h3>
</div></template>


