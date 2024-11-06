import comp from "C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"前端notes\",\"lang\":\"zh-CN\",\"frontmatter\":{\"permalink\":\"/\"},\"headers\":[{\"level\":2,\"title\":\"本站内容\",\"slug\":\"本站内容\",\"link\":\"#本站内容\",\"children\":[]},{\"level\":2,\"title\":\"技术博客文章\",\"slug\":\"技术博客文章\",\"link\":\"#技术博客文章\",\"children\":[]},{\"level\":2,\"title\":\"作者介绍\",\"slug\":\"作者介绍\",\"link\":\"#作者介绍\",\"children\":[]}],\"git\":{\"updatedTime\":1730423125000,\"contributors\":[{\"name\":\"namewyf\",\"email\":\"wyf19892552132@163.com\",\"commits\":3}]},\"filePathRelative\":\"README.md\",\"excerpt\":\"\\n<blockquote>\\n<p>贴心的前端学习路线，全面的编程知识百科</p>\\n<p>作者：<a href=\\\"https://github.com/namewyf\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">前端notes</a></p>\\n<p>本站地址：<a href=\\\"https://namewyf.github.io\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://namewyf.github.io</a></p>\\n</blockquote>\\n<h2>本站内容</h2>\\n<ul>\\n<li><a href=\\\"/article\\\">技术博客文章</a></li>\\n</ul>\"}")
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
