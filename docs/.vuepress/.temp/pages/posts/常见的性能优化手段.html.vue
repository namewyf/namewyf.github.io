<template><div><h1 id="常见的性能优化手段" tabindex="-1"><a class="header-anchor" href="#常见的性能优化手段"><span>常见的性能优化手段</span></a></h1>
<h2 id="v-if和v-show" tabindex="-1"><a class="header-anchor" href="#v-if和v-show"><span>v-if和v-show</span></a></h2>
<p>v-if和v-show的区别：v-if是针对dom进行的操作，当改变元素的隐藏和显示的时候，需要重新渲染dom结点，造成组件的销毁和重建。而v-show操作的是css属性，类似于display，只会控制某个dom结点是否显示在页面上，但无论显示还是隐藏，dom都会被渲染。</p>
<p>因此如果有频繁的切换的场景时，我们一般用v-show，以便提高速度；当切换得比较少的时候，我们一般用v-if，这样可以减少不必要的渲染开销</p>
<h2 id="watch和computed" tabindex="-1"><a class="header-anchor" href="#watch和computed"><span>watch和computed</span></a></h2>
<p>computed和watch的区别：他们两个都是用于响应式的数据处理，区别是<br>
1.computed有缓存，如果再次访问返回值的时候，是不会重新触发计算属性的执行的；watch没有缓存，不涉及返回值的缓存<br>
2.watch常常用于一些开销较大的操作，如果监听的数据有频繁的变化，会造成性能问题。
事实上computed能做的，watch也都能做，只是computed更加专精一些</p>
<h2 id="v-for遍历必须要为item添加key值" tabindex="-1"><a class="header-anchor" href="#v-for遍历必须要为item添加key值"><span>v-for遍历必须要为item添加key值</span></a></h2>
<p>key是vue.js识别dom结点的唯一标识，用于追踪结点的变化。如果没有设置key，当结点发生变化的时候，就会触发v-for里面的大量不必要的重复渲染，造成性能问题</p>
<h2 id="v-if和v-for不要连用" tabindex="-1"><a class="header-anchor" href="#v-if和v-for不要连用"><span>v-if和v-for不要连用</span></a></h2>
<p>因为v-for的优先级大于v-if，就会导致每一项都要进行条件判断，带来额外的性能开销。<br>
这里建议使用computed代替v-if进行条件判断，比如下面的例子。里面的filter就是放的if的条件判断</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>ul<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>li v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"user in activeUsers"</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"user.id"</span><span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token punctuation">{</span> user<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">activeUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>isActive<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">users</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"喵喵侠"</span><span class="token punctuation">,</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"三掌柜"</span><span class="token punctuation">,</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"杨不易呀"</span><span class="token punctuation">,</span> <span class="token literal-property property">isActive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用object-freeze" tabindex="-1"><a class="header-anchor" href="#使用object-freeze"><span>使用Object.freeze()</span></a></h2>
<p>当有一部分数据对象不需要响应式检测他们的变化时，我们可以像这样</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> largeData <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/* 大型数据对象 */</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>largeData <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>largeData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


