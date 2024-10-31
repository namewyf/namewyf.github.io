export const typesMap = {"article":{"/":{"path":"/article/","indexes":[5,6,3,2,4]}},"timeline":{"/":{"path":"/timeline/","indexes":[3,2,4,6,5,0,1]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

