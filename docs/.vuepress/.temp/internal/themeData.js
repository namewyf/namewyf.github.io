export const themeData = JSON.parse("{\"logo\":\"logo.jpg\",\"lastUpdated\":\"最近更新\",\"navbar\":[{\"text\":\"前端笔记\",\"children\":[{\"text\":\"八股文\",\"link\":\"/posts/八股文\",\"target\":\"_self\"},{\"text\":\"灵神算法题单\",\"link\":\"/posts/算法.html\",\"target\":\"_self\"}]},{\"text\":\"GithHub\",\"link\":\"https://github.com/namewyf\",\"target\":\"_blank\"}],\"sidebar\":[\"/\",{\"title\":\"文章\",\"text\":\"posts\",\"prefix\":\"/posts/\",\"children\":[\"\",\"算法\",\"八股文\"]},\"/article/\"],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}