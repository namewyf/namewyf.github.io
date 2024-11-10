export const typesMap = {"article":{"/":{"path":"/article/","indexes":[16,15,12,5,6,9,8,7,4,10,2,11,13,3,14]}},"timeline":{"/":{"path":"/timeline/","indexes":[15,12,5,6,9,8,7,4,10,2,11,13,3,14,16,0,1]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

