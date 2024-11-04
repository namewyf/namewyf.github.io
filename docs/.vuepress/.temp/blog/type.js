export const typesMap = {"article":{"/":{"path":"/article/","indexes":[7,8,4,5,3,2,6]}},"timeline":{"/":{"path":"/timeline/","indexes":[4,5,3,2,6,8,7,0,1]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

