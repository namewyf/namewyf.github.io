<template><div><h1 id="leetcode-day-10" tabindex="-1"><a class="header-anchor" href="#leetcode-day-10"><span>leetcode day 10</span></a></h1>
<h2 id="刷题内容和建议" tabindex="-1"><a class="header-anchor" href="#刷题内容和建议"><span><a href="https://docs.qq.com/doc/DUG1mZ3pib0J0T05T" target="_blank" rel="noopener noreferrer">刷题内容和建议</a></span></a></h2>
<h2 id="_232-用栈实现队列" tabindex="-1"><a class="header-anchor" href="#_232-用栈实现队列"><span>232. 用栈实现队列</span></a></h2>
<p>1.定义一个数据结构的时候他的属性要有默认值，比如这里要有默认值为空数组，否则就是undefined<br>
2.方法对于属性值的调用，记得一定要写this呀<br>
3.不同的并列的方法可以相互调用，要学会善用这一方法，省下很多功夫</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> <span class="token function-variable function">MyQueue</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>stackIn<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>stackOut<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment">//这里要有默认值为空数组，否则就是undefined</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** </span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>stackIn<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">pop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stackOut<span class="token punctuation">.</span>length<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stackIn<span class="token punctuation">.</span>length<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stackIn<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>stackOut<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token comment">//记得一定要写this呀</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stackOut<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">peek</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">   <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//可以用其他函数直接封装</span></span>
<span class="line">   <span class="token keyword">this</span><span class="token punctuation">.</span>stackOut<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">return</span> x<span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// if(this.stackOut===[]){</span></span>
<span class="line">    <span class="token comment">//     while(this.stackIn!=[]){</span></span>
<span class="line">    <span class="token comment">//         let tmp = this.stackIn.pop()</span></span>
<span class="line">    <span class="token comment">//         this.stackOut.push(tmp)</span></span>
<span class="line">    <span class="token comment">//     }</span></span>
<span class="line">    <span class="token comment">// }</span></span>
<span class="line">    <span class="token comment">// return this.stackOut.peek()</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token class-name">MyQueue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">empty</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stackOut<span class="token punctuation">.</span>length<span class="token operator">===</span><span class="token number">0</span><span class="token operator">&amp;&amp;</span><span class="token keyword">this</span><span class="token punctuation">.</span>stackIn<span class="token punctuation">.</span>length<span class="token operator">===</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** </span>
<span class="line"> * Your MyQueue object will be instantiated and called as such:</span>
<span class="line"> * var obj = new MyQueue()</span>
<span class="line"> * obj.push(x)</span>
<span class="line"> * var param_2 = obj.pop()</span>
<span class="line"> * var param_3 = obj.peek()</span>
<span class="line"> * var param_4 = obj.empty()</span>
<span class="line"> */</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


