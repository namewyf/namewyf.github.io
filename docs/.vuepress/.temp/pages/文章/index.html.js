import comp from "C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/文章/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%96%87%E7%AB%A0/\",\"title\":\"文章s\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"文章s\",\"sidebar\":false,\"blog\":{\"type\":\"type\",\"key\":\"文章\"},\"layout\":\"文章\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
