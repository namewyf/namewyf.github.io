import comp from "C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/leetcode-day-10.html.vue"
const data = JSON.parse("{\"path\":\"/posts/leetcode-day-10.html\",\"title\":\"leetcode day 10\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-11-08T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"argorithm\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"刷题内容和建议\",\"slug\":\"刷题内容和建议\",\"link\":\"#刷题内容和建议\",\"children\":[]},{\"level\":2,\"title\":\"232. 用栈实现队列\",\"slug\":\"_232-用栈实现队列\",\"link\":\"#_232-用栈实现队列\",\"children\":[]}],\"git\":{\"updatedTime\":1731166687000,\"contributors\":[{\"name\":\"namewyf\",\"email\":\"wyf19892552132@163.com\",\"commits\":1}]},\"filePathRelative\":\"posts/leetcode-day-10.md\",\"excerpt\":\"\\n<h2><a class=\\\"header-anchor\\\" href=\\\"#刷题内容和建议\\\"><span></span></a><a href=\\\"https://docs.qq.com/doc/DUG1mZ3pib0J0T05T\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">刷题内容和建议</a></h2>\\n<h2>232. 用栈实现队列</h2>\\n<p>1.定义一个数据结构的时候他的属性要有默认值，比如这里要有默认值为空数组，否则就是undefined<br>\\n2.方法对于属性值的调用，记得一定要写this呀<br>\\n3.不同的并列的方法可以相互调用，要学会善用这一方法，省下很多功夫</p>\"}")
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
