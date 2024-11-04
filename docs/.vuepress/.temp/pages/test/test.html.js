import comp from "C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/test/test.html.vue"
const data = JSON.parse("{\"path\":\"/test/test.html\",\"title\":\"Leetcode day 1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-11-01T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"argorithm\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"刷题内容和建议\",\"slug\":\"刷题内容和建议\",\"link\":\"#刷题内容和建议\",\"children\":[]},{\"level\":2,\"title\":\"704.二分查找\",\"slug\":\"_704-二分查找\",\"link\":\"#_704-二分查找\",\"children\":[]}],\"git\":{\"updatedTime\":1730428375000,\"contributors\":[{\"name\":\"namewyf\",\"email\":\"wyf19892552132@163.com\",\"commits\":1}]},\"filePathRelative\":\"test/test.md\",\"excerpt\":\"\\n<h2><a class=\\\"header-anchor\\\" href=\\\"#刷题内容和建议\\\"><span></span></a><a href=\\\"https://docs.qq.com/doc/DUG9UR2ZUc3BjRUdY\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">刷题内容和建议</a></h2>\\n<h2>704.二分查找</h2>\\n<p><a href=\\\"https://leetcode.cn/problems/binary-search/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://leetcode.cn/problems/binary-search/</a></p>\"}")
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
