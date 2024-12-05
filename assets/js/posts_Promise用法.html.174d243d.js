"use strict";(self.webpackChunkfront_end_notes=self.webpackChunkfront_end_notes||[]).push([[996],{1132:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>t,data:()=>o});var e=a(641);const p={},t=(0,a(6262).A)(p,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,n[0]||(n[0]=[(0,e.Fv)('<h1 id="promise面试题" tabindex="-1"><a class="header-anchor" href="#promise面试题"><span>Promise面试题</span></a></h1><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> promise1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> promise1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&#39;promise1&#39;</span>\n<span class="line">&#39;1&#39; Promise{&lt;pending&gt;}</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> promise1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span></span>\n<span class="line">  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;resolve1&#39;</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"><span class="token keyword">const</span> promise2 <span class="token operator">=</span> promise1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> promise1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> promise2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&#39;promise1&#39;</span>\n<span class="line">&#39;1&#39; Promise{&lt;resolved&gt;: &#39;resolve1&#39;}</span>\n<span class="line">&#39;2&#39; Promise{&lt;pending&gt;}</span>\n<span class="line">&#39;resolve1&#39;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',7)]))}]]),o=JSON.parse('{"path":"/posts/Promise%E7%94%A8%E6%B3%95.html","title":"Promise面试题","lang":"zh-CN","frontmatter":{"date":"2024-11-05T00:00:00.000Z","category":["CategoryA"],"tag":["js","tag B"],"sticky":true},"headers":[],"git":{"updatedTime":1733068561000,"contributors":[{"name":"namewyf","email":"wyf19892552132@163.com","commits":1}]},"filePathRelative":"posts/Promise用法.md","excerpt":"\\n<div class=\\"language-javascript line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"js\\" data-title=\\"js\\"><pre><code><span class=\\"line\\"><span class=\\"token keyword\\">const</span> promise1 <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Promise</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">resolve<span class=\\"token punctuation\\">,</span> reject</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'promise1\'</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'1\'</span><span class=\\"token punctuation\\">,</span> promise1<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}')}}]);