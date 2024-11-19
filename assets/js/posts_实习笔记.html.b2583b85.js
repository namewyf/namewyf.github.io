"use strict";(self.webpackChunkfront_end_notes=self.webpackChunkfront_end_notes||[]).push([[398],{3341:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>o});var p=a(641);const t={},e=(0,a(6262).A)(t,[["render",function(n,s){return(0,p.uX)(),(0,p.CE)("div",null,s[0]||(s[0]=[(0,p.Fv)('<h1 id="实习笔记" tabindex="-1"><a class="header-anchor" href="#实习笔记"><span>实习笔记</span></a></h1><p>不能使用多次commit，因为commit是同步的，所以会造成性能很慢</p><p>async函数里面使用await，比如下面这个，就能确保先更新完点赞的状态，再showToast</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">async</span> <span class="token function">toggleLike</span><span class="token punctuation">(</span><span class="token parameter">postId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">      console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;like&#39;</span><span class="token punctuation">)</span></span>\n<span class="line">      <span class="token keyword">try</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>userInfo<span class="token punctuation">.</span>userId<span class="token punctuation">;</span></span>\n<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token constant">API</span><span class="token punctuation">.</span><span class="token function">feedbackLike</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>\n<span class="line">          <span class="token literal-property property">postId</span><span class="token operator">:</span> postId<span class="token punctuation">,</span></span>\n<span class="line">          <span class="token literal-property property">userId</span><span class="token operator">:</span> userId<span class="token punctuation">,</span></span>\n<span class="line">          <span class="token literal-property property">commentId</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>\n<span class="line">          <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">          <span class="token literal-property property">likeFlag</span><span class="token operator">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">.</span>isLikedByCurrentUser<span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token comment">// 检查响应内容，判断是否成功，并根据响应更新本地状态</span></span>\n<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>response <span class="token operator">===</span> <span class="token string">&quot;点赞成功&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">.</span>isLikedByCurrentUser <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 点赞成功后将 isLikedByCurrentUser 更新为 true</span></span>\n<span class="line">          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;点赞成功后，this.item=&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">.</span>likesCount <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 增加点赞数</span></span>\n<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>response <span class="token operator">===</span> <span class="token string">&quot;取消点赞成功&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">.</span>isLikedByCurrentUser <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 取消点赞后将 isLikedByCurrentUser 更新为 false</span></span>\n<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">.</span>likesCount <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 减少点赞数</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;callBackFun&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>\n<span class="line">          <span class="token literal-property property">fun</span><span class="token operator">:</span> <span class="token string">&#39;updateContent&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">          <span class="token literal-property property">param</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token punctuation">.</span>postId<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>item <span class="token punctuation">}</span></span>\n<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;like&#39;</span><span class="token punctuation">)</span></span>\n<span class="line">        uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>\n<span class="line">          <span class="token literal-property property">title</span><span class="token operator">:</span> response<span class="token punctuation">,</span> <span class="token comment">//newIsLiked === 1 ? &#39;点赞成功&#39; : &#39;取消点赞成功&#39;,</span></span>\n<span class="line">          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">          <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;点赞操作异常:&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        uni<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>\n<span class="line">          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;操作异常&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">          <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">          <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',4)]))}]]),o=JSON.parse('{"path":"/posts/%E5%AE%9E%E4%B9%A0%E7%AC%94%E8%AE%B0.html","title":"实习笔记","lang":"zh-CN","frontmatter":{"date":"2024-11-17T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"sticky":5},"headers":[],"git":{"updatedTime":1732025106000,"contributors":[{"name":"namewyf","email":"wyf19892552132@163.com","commits":2}]},"filePathRelative":"posts/实习笔记.md","excerpt":"\\n<p>不能使用多次commit，因为commit是同步的，所以会造成性能很慢</p>\\n<p>async函数里面使用await，比如下面这个，就能确保先更新完点赞的状态，再showToast</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"js\\" data-title=\\"js\\"><pre><code><span class=\\"line\\"><span class=\\"token keyword\\">async</span> <span class=\\"token function\\">toggleLike</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">postId</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">      console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">time</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'like\'</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">      <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">const</span> userId <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>$store<span class=\\"token punctuation\\">.</span>state<span class=\\"token punctuation\\">.</span>userInfo<span class=\\"token punctuation\\">.</span>userId<span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>userId<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">const</span> response <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">await</span> <span class=\\"token constant\\">API</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">feedbackLike</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">postId</span><span class=\\"token operator\\">:</span> postId<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">userId</span><span class=\\"token operator\\">:</span> userId<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">commentId</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">dataType</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"post\\"</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">likeFlag</span><span class=\\"token operator\\">:</span> <span class=\\"token operator\\">!</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>item<span class=\\"token punctuation\\">.</span>isLikedByCurrentUser<span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">        <span class=\\"token comment\\">// 检查响应内容，判断是否成功，并根据响应更新本地状态</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>response <span class=\\"token operator\\">===</span> <span class=\\"token string\\">\\"点赞成功\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">          <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>item<span class=\\"token punctuation\\">.</span>isLikedByCurrentUser <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 点赞成功后将 isLikedByCurrentUser 更新为 true</span></span>\\n<span class=\\"line\\">          console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"点赞成功后，this.item=\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>item<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">          <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>item<span class=\\"token punctuation\\">.</span>likesCount <span class=\\"token operator\\">+=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 增加点赞数</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>response <span class=\\"token operator\\">===</span> <span class=\\"token string\\">\\"取消点赞成功\\"</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">          <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>item<span class=\\"token punctuation\\">.</span>isLikedByCurrentUser <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 取消点赞后将 isLikedByCurrentUser 更新为 false</span></span>\\n<span class=\\"line\\">          <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>item<span class=\\"token punctuation\\">.</span>likesCount <span class=\\"token operator\\">-=</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 减少点赞数</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">        <span class=\\"token keyword\\">await</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">$emit</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'callBackFun\'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">fun</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\'updateContent\'</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">param</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token punctuation\\">[</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>item<span class=\\"token punctuation\\">.</span>postId<span class=\\"token punctuation\\">]</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>item <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">timeEnd</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\'like\'</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\">        uni<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">showToast</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">title</span><span class=\\"token operator\\">:</span> response<span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">//newIsLiked === 1 ? \'点赞成功\' : \'取消点赞成功\',</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">icon</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"none\\"</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">duration</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">2000</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span>error<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">error</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"点赞操作异常:\\"</span><span class=\\"token punctuation\\">,</span> error<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">        uni<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">showToast</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">title</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"操作异常\\"</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">icon</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"none\\"</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">          <span class=\\"token literal-property property\\">duration</span><span class=\\"token operator\\">:</span> <span class=\\"token number\\">2000</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span></span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}')}}]);