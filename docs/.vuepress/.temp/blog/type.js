export const typesMap = {"article":{"/":{"path":"/article/","indexes":[18,19,16,12,17,13,5,6,9,8,7,4,10,2,11,14,3,15]}},"timeline":{"/":{"path":"/timeline/","indexes":[12,19,18,17,16,13,5,6,9,8,7,4,10,2,11,14,3,15,0,1]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

