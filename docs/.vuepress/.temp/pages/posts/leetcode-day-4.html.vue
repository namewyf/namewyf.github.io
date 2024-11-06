<template><div><h1 id="leetcode-day-4" tabindex="-1"><a class="header-anchor" href="#leetcode-day-4"><span>leetcode day 4</span></a></h1>
<p>##<a href="https://docs.qq.com/doc/DUFNjYUxYRHRVWklp" target="_blank" rel="noopener noreferrer">刷题内容和建议</a></p>
<h2 id="_24-两两交换链表中的节点" tabindex="-1"><a class="header-anchor" href="#_24-两两交换链表中的节点"><span>24. 两两交换链表中的节点</span></a></h2>
<p><a href="https://leetcode.cn/problems/swap-nodes-in-pairs/description/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/swap-nodes-in-pairs/description/</a>
注意画图，以防弄错</p>
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
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">swapPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> newHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>head<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">let</span> i <span class="token operator">=</span> newHead<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">while</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//交换</span></span>
<span class="line">            <span class="token keyword">let</span> a1 <span class="token operator">=</span> i</span>
<span class="line">            <span class="token keyword">let</span> a2 <span class="token operator">=</span> i<span class="token punctuation">.</span>next</span>
<span class="line">            <span class="token keyword">let</span> a3 <span class="token operator">=</span> i<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next</span>
<span class="line">            <span class="token keyword">let</span> a4 <span class="token operator">=</span> i<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next</span>
<span class="line">            a1<span class="token punctuation">.</span>next <span class="token operator">=</span> a3</span>
<span class="line">            a3<span class="token punctuation">.</span>next <span class="token operator">=</span> a2</span>
<span class="line">            a2<span class="token punctuation">.</span>next <span class="token operator">=</span> a4</span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> newHead<span class="token punctuation">.</span>next</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        i <span class="token operator">=</span> i<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> newHead<span class="token punctuation">.</span>next</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_19-删除链表的倒数第n个节点" tabindex="-1"><a class="header-anchor" href="#_19-删除链表的倒数第n个节点"><span>19.删除链表的倒数第N个节点</span></a></h2>
<p><a href="https://leetcode.cn/problems/remove-nth-node-from-end-of-list/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/remove-nth-node-from-end-of-list/</a></p>
<h3 id="双指针法" tabindex="-1"><a class="header-anchor" href="#双指针法"><span>双指针法</span></a></h3>
<p>略</p>
<h3 id="递归法" tabindex="-1"><a class="header-anchor" href="#递归法"><span>递归法</span></a></h3>
<p>时间复杂度和</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for singly-linked list.</span>
<span class="line"> * function ListNode(val, next) <span class="token punctuation">{</span></span>
<span class="line"> *     this.val = (val===undefined ? 0 : val)</span>
<span class="line"> *     this.next = (next===undefined ? null : next)</span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">removeNthFromEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> newHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    newHead<span class="token punctuation">.</span>next <span class="token operator">=</span> head</span>
<span class="line">    <span class="token keyword">var</span> i <span class="token operator">=</span> n</span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">func</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span> n<span class="token punctuation">)</span></span>
<span class="line">            i<span class="token operator">--</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            head<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">return</span> head</span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">func</span><span class="token punctuation">(</span>newHead<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">.</span>next</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_160-链表相交" tabindex="-1"><a class="header-anchor" href="#_160-链表相交"><span>160.链表相交</span></a></h2>
<p><a href="https://leetcode.cn/problems/intersection-of-two-linked-lists/description/" target="_blank" rel="noopener noreferrer">https://leetcode.cn/problems/intersection-of-two-linked-lists/description/</a></p>
<p>1.这个地方用!=和!==都是可行的，注意!==是没有类型转换的，是严格比较，而!=是先转换后再比较<br>
2.这个地方是不会出现无限循环的，因为如果两个链表不相交，最后会同时移动到null，这时候A和B相等，跳出循环;而如果两个链表长度相同，他们会在相交结点那里相遇</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for singly-linked list.</span>
<span class="line"> * function ListNode(val) <span class="token punctuation">{</span></span>
<span class="line"> *     this.val = val;</span>
<span class="line"> *     this.next = null;</span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headA</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">headB</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">getIntersectionNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">headA<span class="token punctuation">,</span> headB</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">let</span> <span class="token constant">A</span> <span class="token operator">=</span> headA<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token constant">B</span> <span class="token operator">=</span> headB<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token operator">===</span><span class="token keyword">null</span><span class="token operator">||</span><span class="token constant">B</span> <span class="token operator">===</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//这个地方是不会出现无限循环的，因为如果两个链表不相交，最后会同时移动到null，这时候A和B相等，跳出循环</span></span>
<span class="line">    <span class="token comment">//而如果两个链表长度相同，他们会在相交结点那里相遇</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token constant">A</span><span class="token operator">!==</span><span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//这个地方用!=和!==都是可行的，注意!==是没有类型转换的，是严格比较，而!=是先转换后再比较</span></span>
<span class="line">        <span class="token constant">A</span> <span class="token operator">=</span> <span class="token constant">A</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span>headB<span class="token operator">:</span><span class="token constant">A</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">        <span class="token constant">B</span> <span class="token operator">=</span> <span class="token constant">B</span> <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">?</span>headA<span class="token operator">:</span><span class="token constant">B</span><span class="token punctuation">.</span>next<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">A</span> <span class="token operator">===</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token constant">A</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">null</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_142-环形链表ii" tabindex="-1"><a class="header-anchor" href="#_142-环形链表ii"><span>142.环形链表II</span></a></h2>
<h3 id="哈希表法" tabindex="-1"><a class="header-anchor" href="#哈希表法"><span>哈希表法</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Definition for singly-linked list.</span>
<span class="line"> * function ListNode(val) <span class="token punctuation">{</span></span>
<span class="line"> *     this.val = val;</span>
<span class="line"> *     this.next = null;</span>
<span class="line"> * <span class="token punctuation">}</span></span>
<span class="line"> */</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">var</span> <span class="token function-variable function">detectCycle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">const</span> map1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> top <span class="token operator">=</span> head</span>
<span class="line">    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>top<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>map1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> top</span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            num<span class="token operator">++</span></span>
<span class="line">            map1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> num<span class="token punctuation">)</span></span>
<span class="line">            top <span class="token operator">=</span> top<span class="token punctuation">.</span>next</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">null</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/leetcode-day-4/142.png" alt="img"></p>
<h3 id="快慢指针法" tabindex="-1"><a class="header-anchor" href="#快慢指针法"><span>快慢指针法</span></a></h3>
</div></template>


