export const typesMap = {"article":{"/":{"path":"/article/","indexes":[13,14,5,8,7,6,4,2,10,11,9,3,12]}},"timeline":{"/":{"path":"/timeline/","indexes":[5,8,7,6,4,2,10,11,9,3,12,14,13,0,1]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

