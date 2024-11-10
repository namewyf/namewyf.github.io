<template><div><h1 id="算法灵神题单" tabindex="-1"><a class="header-anchor" href="#算法灵神题单"><span>算法灵神题单</span></a></h1>
<p><a href="https://leetcode.cn/circle/discuss/RvFUtj/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/circle/discuss/RvFUtj/</a></p>
<h2 id="滑动窗口与双指针-定长-不定长-至多-至少-恰好-单序列-双序列-三指针" tabindex="-1"><a class="header-anchor" href="#滑动窗口与双指针-定长-不定长-至多-至少-恰好-单序列-双序列-三指针"><span>滑动窗口与双指针（定长/不定长/至多/至少/恰好/单序列/双序列/三指针）</span></a></h2>
<h3 id="定长滑动窗口" tabindex="-1"><a class="header-anchor" href="#定长滑动窗口"><span>定长滑动窗口</span></a></h3>
<h4 id="_643-子数组最大平均数-i" tabindex="-1"><a class="header-anchor" href="#_643-子数组最大平均数-i"><span>643. 子数组最大平均数 I</span></a></h4>
<p><a href="https://leetcode.cn/problems/maximum-average-subarray-i/description/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/maximum-average-subarray-i/description/</a></p>
<p>1.不要预设数字是正数，比如下面这个max不能设置为0<br>
2.在第一次滑动窗口长度符合条件的时候，虽然不用进行判定，但是要设置值</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">findMaxAverage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> max <span class="token comment">//不能设置为0</span></span>
<span class="line">    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>right<span class="token operator">&lt;</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>right<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        sum<span class="token operator">+=</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>right<span class="token operator">&lt;</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">continue</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>right <span class="token operator">===</span> k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            max <span class="token operator">=</span> sum<span class="token comment">//在第一次滑动窗口长度符合条件的时候，虽然不用进行判定，但是要设置值</span></span>
<span class="line">            <span class="token keyword">continue</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        sum<span class="token operator">-=</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span></span>
<span class="line">        left<span class="token operator">++</span></span>
<span class="line">        max <span class="token operator">=</span> max<span class="token operator">></span>sum<span class="token operator">?</span>max<span class="token operator">:</span>sum</span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> max<span class="token operator">/</span>k<span class="token operator">||</span>sum<span class="token operator">/</span>k</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1343-大小为-k-且平均值大于等于阈值的子数组数目" tabindex="-1"><a class="header-anchor" href="#_1343-大小为-k-且平均值大于等于阈值的子数组数目"><span>1343. 大小为 K 且平均值大于等于阈值的子数组数目</span></a></h4>
<p><a href="https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/</a></p>
<p>做判断的时候，不是=，而是===(经常犯错，但如果是编辑器的话是会纠错的)</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">threshold</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">numOfSubarrays</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> k<span class="token punctuation">,</span> threshold</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>avg<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token punctuation">;</span>left<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>left<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//这里left和right实际上是写反了，但是不想改了，不影响</span></span>
<span class="line">        sum<span class="token operator">+=</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token operator">&lt;</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">continue</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">===</span> k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//做判断的时候，不是=，而是===</span></span>
<span class="line">            avg <span class="token operator">=</span> sum<span class="token operator">/</span>k</span>
<span class="line">            <span class="token keyword">if</span><span class="token punctuation">(</span>avg<span class="token operator">>=</span>threshold<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                num<span class="token operator">++</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">continue</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        sum <span class="token operator">-=</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span></span>
<span class="line">        right<span class="token operator">++</span></span>
<span class="line">        avg <span class="token operator">=</span> sum<span class="token operator">/</span>k</span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>avg<span class="token operator">>=</span>threshold<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            num<span class="token operator">++</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> num</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="不定长滑动窗口" tabindex="-1"><a class="header-anchor" href="#不定长滑动窗口"><span>不定长滑动窗口</span></a></h3>
<h3 id="单序列双指针" tabindex="-1"><a class="header-anchor" href="#单序列双指针"><span>单序列双指针</span></a></h3>
<h3 id="双序列双指针" tabindex="-1"><a class="header-anchor" href="#双序列双指针"><span>双序列双指针</span></a></h3>
<h3 id="三指针" tabindex="-1"><a class="header-anchor" href="#三指针"><span>三指针</span></a></h3>
<h2 id="链表、二叉树与一般树-前后指针-快慢指针-dfs-bfs-直径-lca" tabindex="-1"><a class="header-anchor" href="#链表、二叉树与一般树-前后指针-快慢指针-dfs-bfs-直径-lca"><span>链表、二叉树与一般树（前后指针/快慢指针/DFS/BFS/直径/LCA）</span></a></h2>
<h3 id="一、链表" tabindex="-1"><a class="header-anchor" href="#一、链表"><span>一、链表</span></a></h3>
<h3 id="二、二叉树" tabindex="-1"><a class="header-anchor" href="#二、二叉树"><span>二、二叉树</span></a></h3>
<h4 id="§2-1-遍历二叉树" tabindex="-1"><a class="header-anchor" href="#§2-1-遍历二叉树"><span>§2.1 遍历二叉树</span></a></h4>
<h5 id="_144-二叉树的前序遍历" tabindex="-1"><a class="header-anchor" href="#_144-二叉树的前序遍历"><span>144. 二叉树的前序遍历</span></a></h5>
<p><a href="https://leetcode.cn/problems/binary-tree-preorder-traversal/description/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/binary-tree-preorder-traversal/description/</a></p>
<h5 id="_94-二叉树的中序遍历" tabindex="-1"><a class="header-anchor" href="#_94-二叉树的中序遍历"><span>94. 二叉树的中序遍历</span></a></h5>
<h3 id="三、一般树" tabindex="-1"><a class="header-anchor" href="#三、一般树"><span>三、一般树</span></a></h3>
</div></template>


