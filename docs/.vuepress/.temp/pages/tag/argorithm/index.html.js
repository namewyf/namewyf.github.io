import comp from "C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/tag/argorithm/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/argorithm/\",\"title\":\"Tag argorithm\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Tag argorithm\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"argorithm\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
