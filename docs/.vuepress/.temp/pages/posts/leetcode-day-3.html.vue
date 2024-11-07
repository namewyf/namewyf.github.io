<template><div><h1 id="leetcode-day-3" tabindex="-1"><a class="header-anchor" href="#leetcode-day-3"><span>Leetcode day 3</span></a></h1>
<h2 id="刷题内容和建议" tabindex="-1"><a class="header-anchor" href="#刷题内容和建议"><span><a href="https://docs.qq.com/doc/DUGdqYWNYeGhlaVR6" target="_blank" rel="noopener noreferrer">刷题内容和建议</a></span></a></h2>
<h2 id="_203-移除链表元素" tabindex="-1"><a class="header-anchor" href="#_203-移除链表元素"><span>203.移除链表元素</span></a></h2>
<p><a href="https://leetcode.cn/problems/remove-linked-list-elements/description/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/remove-linked-list-elements/description/</a></p>
<h3 id="错解" tabindex="-1"><a class="header-anchor" href="#错解"><span>错解</span></a></h3>
<p>1.当出现增删改的时候都是需要创建虚拟结点newHead的<br>
2.如果发现值等于目标删除的结点，删除后不需要再cur = cur.next了，因为这个地方while检验的是cur.next的值，当删除cur.next结点后，cur.next指向的就是下次循环要检验的结点了不需要在cur = cur.next了</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for singly-lincured list.</span>
<span class="line"> * function ListNode(val, next) <span class="token punctuation">{</span></span>
<span class="line"> *     this.val = (val===undefined ? 0 : val)</span>
<span class="line"> *     this.next = (next===undefined ? null : next)</span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">ListNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> next<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">removeElements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> newHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> cur <span class="token operator">=</span> newHead</span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token comment">//如果发现值等于目标删除的结点，删除后不需要再cur = cur.next了</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> newHead<span class="token punctuation">.</span>next</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正解" tabindex="-1"><a class="header-anchor" href="#正解"><span>正解</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for singly-linked list.</span>
<span class="line"> * function ListNode(val, next) <span class="token punctuation">{</span></span>
<span class="line"> *     this.val = (val===undefined ? 0 : val)</span>
<span class="line"> *     this.next = (next===undefined ? null : next)</span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">removeElements</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> cur <span class="token operator">=</span> dummy<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            cur<span class="token punctuation">.</span>next <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next</span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">            cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next</span>
<span class="line">    </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_707-设计链表" tabindex="-1"><a class="header-anchor" href="#_707-设计链表"><span>707.设计链表</span></a></h2>
<p><a href="https://leetcode.cn/problems/remove-element/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/remove-element/</a></p>
<p>暴力法</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**暴力法</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">!=</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            tmp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">            num<span class="token operator">++</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>tmp<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">[</span>j<span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> num</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_206-反转链表" tabindex="-1"><a class="header-anchor" href="#_206-反转链表"><span>206.反转链表</span></a></h2>
<p><a href="https://leetcode.cn/problems/squares-of-a-sorted-array/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/squares-of-a-sorted-array/</a></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for singly-linked list.</span>
<span class="line"> * function ListNode(val, next) <span class="token punctuation">{</span></span>
<span class="line"> *     this.val = (val===undefined ? 0 : val)</span>
<span class="line"> *     this.next = (next===undefined ? null : next)</span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> k <span class="token operator">=</span> head<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> pre <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> l <span class="token operator">=</span> k</span>
<span class="line">        k <span class="token operator">=</span> k<span class="token punctuation">.</span>next</span>
<span class="line">        l<span class="token punctuation">.</span>next <span class="token operator">=</span> pre</span>
<span class="line">        pre <span class="token operator">=</span> l</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> pre</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


