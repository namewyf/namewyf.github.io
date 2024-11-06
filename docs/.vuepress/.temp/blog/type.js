export const typesMap = {"article":{"/":{"path":"/article/","indexes":[12,13,7,6,5,4,2,9,10,8,3,11]}},"timeline":{"/":{"path":"/timeline/","indexes":[7,6,5,4,2,9,10,8,3,11,13,12,0,1]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

