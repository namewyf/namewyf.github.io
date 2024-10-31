---
date: 2024-10-31
category:
  - CategoryA
tag:
  - argorithm
  - tag B
---
# vuepress建站配置
## 网站基本信息
```javascript
const author = "王宇飞";
const tags = ["前端", "计算机", "编程"]
```
```javascript
export default defineUserConfig({
  title: '前端notes',
  description: '全面的前端笔记',
})
```

## head标签
有利于seo
```javascript

head: [
  ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ["meta", { name: "keywords", content: "前端, 计算机, 编程，王宇飞，前端开发，算法，项目" }],
],
```

## 永久链接
```javascript
  permalink: '/:slug',
```

## 文件热更新
```javascript
//监听文件变化，热更新
extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
```
## markdown配置
```javascript
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h2", "h3", "h4", "h4", "h5", "h6"]
  },
```