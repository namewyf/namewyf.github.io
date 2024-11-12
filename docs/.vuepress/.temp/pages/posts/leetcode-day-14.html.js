import comp from "C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/leetcode-day-14.html.vue"
const data = JSON.parse("{\"path\":\"/posts/leetcode-day-14.html\",\"title\":\"leetcode day 14\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-11-12T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"argorithm\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"刷题内容和建议\",\"slug\":\"刷题内容和建议\",\"link\":\"#刷题内容和建议\",\"children\":[]},{\"level\":2,\"title\":\"226.翻转二叉树 （优先掌握递归）\",\"slug\":\"_226-翻转二叉树-优先掌握递归\",\"link\":\"#_226-翻转二叉树-优先掌握递归\",\"children\":[]},{\"level\":2,\"title\":\"101. 对称二叉树\",\"slug\":\"_101-对称二叉树\",\"link\":\"#_101-对称二叉树\",\"children\":[]},{\"level\":2,\"title\":\"104. 二叉树的最大深度\",\"slug\":\"_104-二叉树的最大深度\",\"link\":\"#_104-二叉树的最大深度\",\"children\":[]},{\"level\":2,\"title\":\"111. 二叉树的最小深度\",\"slug\":\"_111-二叉树的最小深度\",\"link\":\"#_111-二叉树的最小深度\",\"children\":[]}],\"git\":{\"updatedTime\":1731416573000,\"contributors\":[{\"name\":\"namewyf\",\"email\":\"wyf19892552132@163.com\",\"commits\":1}]},\"filePathRelative\":\"posts/leetcode-day-14.md\",\"excerpt\":\"\\n<h2><a class=\\\"header-anchor\\\" href=\\\"#刷题内容和建议\\\"><span></span></a><a href=\\\"https://docs.qq.com/doc/DUHN0ZVJuRmVYeWNv\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">刷题内容和建议</a></h2>\\n<h2>226.翻转二叉树 （优先掌握递归）</h2>\\n<div class=\\\"language-javascript line-numbers-mode\\\" data-highlighter=\\\"prismjs\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\"><pre><code><span class=\\\"line\\\"><span class=\\\"token doc-comment comment\\\">/**</span>\\n<span class=\\\"line\\\"> * Definition for a binary tree node.</span>\\n<span class=\\\"line\\\"> * function TreeNode(val, left, right) <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\"> *     this.val = (val===undefined ? 0 : val)</span>\\n<span class=\\\"line\\\"> *     this.left = (left===undefined ? null : left)</span>\\n<span class=\\\"line\\\"> *     this.right = (right===undefined ? null : right)</span>\\n<span class=\\\"line\\\"> * <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\"> */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token doc-comment comment\\\">/**</span>\\n<span class=\\\"line\\\"> * <span class=\\\"token keyword\\\">@param</span> <span class=\\\"token class-name\\\"><span class=\\\"token punctuation\\\">{</span>TreeNode<span class=\\\"token punctuation\\\">}</span></span> <span class=\\\"token parameter\\\">root</span></span>\\n<span class=\\\"line\\\"> * <span class=\\\"token keyword\\\">@return</span> <span class=\\\"token class-name\\\"><span class=\\\"token punctuation\\\">{</span>TreeNode<span class=\\\"token punctuation\\\">}</span></span></span>\\n<span class=\\\"line\\\"> */</span></span>\\n<span class=\\\"line\\\"><span class=\\\"token keyword\\\">var</span> <span class=\\\"token function-variable function\\\">invertTree</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">function</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">root</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">    </span>\\n<span class=\\\"line\\\">    <span class=\\\"token keyword\\\">function</span> <span class=\\\"token function\\\">func</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token parameter\\\">root</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token keyword\\\">if</span><span class=\\\"token punctuation\\\">(</span>root<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token punctuation\\\">[</span>root<span class=\\\"token punctuation\\\">.</span>left<span class=\\\"token punctuation\\\">,</span>root<span class=\\\"token punctuation\\\">.</span>right<span class=\\\"token punctuation\\\">]</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">[</span>root<span class=\\\"token punctuation\\\">.</span>right<span class=\\\"token punctuation\\\">,</span>root<span class=\\\"token punctuation\\\">.</span>left<span class=\\\"token punctuation\\\">]</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token function\\\">func</span><span class=\\\"token punctuation\\\">(</span>root<span class=\\\"token punctuation\\\">.</span>left<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token function\\\">func</span><span class=\\\"token punctuation\\\">(</span>root<span class=\\\"token punctuation\\\">.</span>right<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token keyword\\\">return</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token punctuation\\\">}</span><span class=\\\"token keyword\\\">else</span><span class=\\\"token punctuation\\\">{</span></span>\\n<span class=\\\"line\\\">            <span class=\\\"token keyword\\\">return</span></span>\\n<span class=\\\"line\\\">        <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token punctuation\\\">}</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token function\\\">func</span><span class=\\\"token punctuation\\\">(</span>root<span class=\\\"token punctuation\\\">)</span></span>\\n<span class=\\\"line\\\">    <span class=\\\"token keyword\\\">return</span> root</span>\\n<span class=\\\"line\\\"><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span></span>\\n<span class=\\\"line\\\"></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
