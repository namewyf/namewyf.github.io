export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"History":{"path":"/category/history/","indexes":[0,1]},"CategoryA":{"path":"/category/categorya/","indexes":[2,3,4,5,6,7,8,9,10,11]},"CategoryC":{"path":"/category/categoryc/","indexes":[12,13]}}}},"tag":{"/":{"path":"/tag/","map":{"WWI":{"path":"/tag/wwi/","indexes":[1]},"WWII":{"path":"/tag/wwii/","indexes":[0]},"tag A":{"path":"/tag/tag-a/","indexes":[11]},"tag B":{"path":"/tag/tag-b/","indexes":[2,3,4,5,6,7,8,9,10,11]},"argorithm":{"path":"/tag/argorithm/","indexes":[2,3,4,5,6,7,8,9,10]},"tag E":{"path":"/tag/tag-e/","indexes":[12,13]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

