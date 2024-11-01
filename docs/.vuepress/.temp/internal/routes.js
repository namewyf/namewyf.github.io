export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"前端notes"} }],
  ["/posts/archive1.html", { loader: () => import(/* webpackChunkName: "posts_archive1.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/archive1.html.js"), meta: {"_blog":{"title":"Archive Article1","author":"","date":"1998-01-01T00:00:00.000Z","category":["History"],"tag":["WWI"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Archive Article1"} }],
  ["/posts/archive2.html", { loader: () => import(/* webpackChunkName: "posts_archive2.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/archive2.html.js"), meta: {"_blog":{"title":"Archive Article2","author":"","date":"1998-01-02T00:00:00.000Z","category":["History"],"tag":["WWII"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Archive Article2"} }],
  ["/posts/article1.html", { loader: () => import(/* webpackChunkName: "posts_article1.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/article1.html.js"), meta: {"_blog":{"title":"Article 1","author":"","date":"2022-01-01T00:00:00.000Z","category":["CategoryA"],"tag":["tag A","tag B"],"excerpt":"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},"title":"Article 1"} }],
  ["/posts/leetcode-day-1.html", { loader: () => import(/* webpackChunkName: "posts_leetcode-day-1.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/leetcode-day-1.html.js"), meta: {"_blog":{"title":"Leetcode day 1","author":"","date":"2024-10-31T00:00:00.000Z","category":["CategoryA"],"tag":["argorithm","tag B"],"excerpt":"\n<h2><a class=\"header-anchor\" href=\"#刷题内容和建议\"><span></span></a><a href=\"https://docs.qq.com/doc/DUG9UR2ZUc3BjRUdY\" target=\"_blank\" rel=\"noopener noreferrer\">刷题内容和建议</a></h2>\n<h2>704.二分查找</h2>\n<p><a href=\"https://leetcode.cn/problems/binary-search/\" target=\"_blank\" rel=\"noopener noreferrer\">https://leetcode.cn/problems/binary-search/</a></p>"},"title":"Leetcode day 1"} }],
  ["/posts/sticky.html", { loader: () => import(/* webpackChunkName: "posts_sticky.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/sticky.html.js"), meta: {"_blog":{"title":"Sticky Article","author":"","date":"2021-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"excerpt":"<p>A sticky article demo.</p>"},"title":"Sticky Article"} }],
  ["/posts/sticky2.html", { loader: () => import(/* webpackChunkName: "posts_sticky2.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/sticky2.html.js"), meta: {"_blog":{"title":"Sticky Article with Higher Priority","author":"","date":"2020-01-01T00:00:00.000Z","category":["CategoryC"],"tag":["tag E"],"excerpt":"\n<p>Excerpt information which is added manually.</p>\n"},"title":"Sticky Article with Higher Priority"} }],
  ["/posts/vuepress%E5%BB%BA%E7%AB%99%E9%85%8D%E7%BD%AE.html", { loader: () => import(/* webpackChunkName: "posts_vuepress建站配置.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/vuepress建站配置.html.js"), meta: {"_blog":{"title":"vuepress建站配置","author":"","date":"2024-10-31T00:00:00.000Z","category":["CategoryA"],"tag":["argorithm","tag B"],"excerpt":"\n<h2>网站基本信息</h2>\n<div class=\"language-javascript line-numbers-mode\" data-highlighter=\"prismjs\" data-ext=\"js\" data-title=\"js\"><pre><code><span class=\"line\"><span class=\"token keyword\">const</span> author <span class=\"token operator\">=</span> <span class=\"token string\">\"前端notes\"</span><span class=\"token punctuation\">;</span></span>\n<span class=\"line\"><span class=\"token keyword\">const</span> tags <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"前端\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"计算机\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"编程\"</span><span class=\"token punctuation\">]</span></span>\n<span class=\"line\"></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>"},"title":"vuepress建站配置"} }],
  ["/test/test.html", { loader: () => import(/* webpackChunkName: "test_test.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/test/test.html.js"), meta: {"title":"Leetcode day 1"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/history/", { loader: () => import(/* webpackChunkName: "category_history_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/category/history/index.html.js"), meta: {"title":"Category History"} }],
  ["/category/categorya/", { loader: () => import(/* webpackChunkName: "category_categorya_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/category/categorya/index.html.js"), meta: {"title":"Category CategoryA"} }],
  ["/category/categoryc/", { loader: () => import(/* webpackChunkName: "category_categoryc_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/category/categoryc/index.html.js"), meta: {"title":"Category CategoryC"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/wwi/", { loader: () => import(/* webpackChunkName: "tag_wwi_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/tag/wwi/index.html.js"), meta: {"title":"Tag WWI"} }],
  ["/tag/wwii/", { loader: () => import(/* webpackChunkName: "tag_wwii_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/tag/wwii/index.html.js"), meta: {"title":"Tag WWII"} }],
  ["/tag/tag-a/", { loader: () => import(/* webpackChunkName: "tag_tag-a_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/tag/tag-a/index.html.js"), meta: {"title":"Tag tag A"} }],
  ["/tag/tag-b/", { loader: () => import(/* webpackChunkName: "tag_tag-b_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/tag/tag-b/index.html.js"), meta: {"title":"Tag tag B"} }],
  ["/tag/argorithm/", { loader: () => import(/* webpackChunkName: "tag_argorithm_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/tag/argorithm/index.html.js"), meta: {"title":"Tag argorithm"} }],
  ["/tag/tag-e/", { loader: () => import(/* webpackChunkName: "tag_tag-e_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/tag/tag-e/index.html.js"), meta: {"title":"Tag tag E"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
