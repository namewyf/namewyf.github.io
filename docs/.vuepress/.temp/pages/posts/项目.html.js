import comp from "C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/项目.html.vue"
const data = JSON.parse("{\"path\":\"/posts/%E9%A1%B9%E7%9B%AE.html\",\"title\":\"Sticky Article\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2021-01-01T00:00:00.000Z\",\"category\":[\"CategoryC\"],\"tag\":[\"tag E\"],\"sticky\":true,\"excerpt\":\"<p>A sticky article demo.</p>\"},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1730948489000,\"contributors\":[{\"name\":\"namewyf\",\"email\":\"wyf19892552132@163.com\",\"commits\":1}]},\"filePathRelative\":\"posts/项目.md\"}")
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
