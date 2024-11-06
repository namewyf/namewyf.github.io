import comp from "C:/code/project/front-end-notes/docs/.vuepress/.temp/pages/posts/常见的性能优化手段.html.vue"
const data = JSON.parse("{\"path\":\"/posts/%E5%B8%B8%E8%A7%81%E7%9A%84%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E6%89%8B%E6%AE%B5.html\",\"title\":\"常见的性能优化手段\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-11-04T00:00:00.000Z\",\"category\":[\"CategoryA\"],\"tag\":[\"argorithm\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"v-if和v-show\",\"slug\":\"v-if和v-show\",\"link\":\"#v-if和v-show\",\"children\":[]},{\"level\":2,\"title\":\"watch和computed\",\"slug\":\"watch和computed\",\"link\":\"#watch和computed\",\"children\":[]},{\"level\":2,\"title\":\"v-for遍历必须要为item添加key值\",\"slug\":\"v-for遍历必须要为item添加key值\",\"link\":\"#v-for遍历必须要为item添加key值\",\"children\":[]},{\"level\":2,\"title\":\"v-if和v-for不要连用\",\"slug\":\"v-if和v-for不要连用\",\"link\":\"#v-if和v-for不要连用\",\"children\":[]},{\"level\":2,\"title\":\"使用Object.freeze()\",\"slug\":\"使用object-freeze\",\"link\":\"#使用object-freeze\",\"children\":[]}],\"git\":{\"updatedTime\":1730794410000,\"contributors\":[{\"name\":\"namewyf\",\"email\":\"wyf19892552132@163.com\",\"commits\":2}]},\"filePathRelative\":\"posts/常见的性能优化手段.md\",\"excerpt\":\"\\n<h2>v-if和v-show</h2>\\n<p>v-if和v-show的区别：v-if是针对dom进行的操作，当改变元素的隐藏和显示的时候，需要重新渲染dom结点，造成组件的销毁和重建。而v-show操作的是css属性，类似于display，只会控制某个dom结点是否显示在页面上，但无论显示还是隐藏，dom都会被渲染。</p>\\n<p>因此如果有频繁的切换的场景时，我们一般用v-show，以便提高速度；当切换得比较少的时候，我们一般用v-if，这样可以减少不必要的渲染开销</p>\\n<h2>watch和computed</h2>\\n<p>computed和watch的区别：他们两个都是用于响应式的数据处理，区别是<br>\\n1.computed有缓存，如果再次访问返回值的时候，是不会重新触发计算属性的执行的；watch没有缓存，不涉及返回值的缓存<br>\\n2.watch常常用于一些开销较大的操作，如果监听的数据有频繁的变化，会造成性能问题。\\n事实上computed能做的，watch也都能做，只是computed更加专精一些</p>\"}")
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
