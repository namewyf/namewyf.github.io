export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"前端notes\",\"description\":\"全面的前端笔记\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/favicon.ico\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"前端, 计算机, 编程，前端notes，前端开发，算法，项目\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
