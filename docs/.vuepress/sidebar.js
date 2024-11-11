import algorithmSideBar from "./sidebars/algorithmSideBar"
export default [
    "/" /* / */,
    {
        title: '文章',
        text: "posts",
        prefix: "/posts/",
        children: [
            "",
            "算法",
            "八股文",
        ],
    },
    "/article/",
]