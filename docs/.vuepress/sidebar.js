// import algorithmSideBar from "./sidebars/algorithmSideBar"
export default [
    "/" /* / */,
    {
        title: '文章',
        text: "技术博客",
        prefix: "/posts/",
        link: "/posts/",
        children: [
            "算法",
            "八股文",
            "后台管理项目",
            "常见的性能优化手段"
        ],
    },{
        title: '文章',
        text: "技术笔记",
        prefix: "/notes/",
        link: "/notes/",
        children: [
            "算法",
            "八股文",
            "后台管理项目"
        ],
    },
    "/article/",
]