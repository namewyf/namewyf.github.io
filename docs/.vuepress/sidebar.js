// import algorithmSideBar from "./sidebars/algorithmSideBar"
export default [
    "/" /* / */,
    {
        title: '笔记',
        text: "系统笔记",
        prefix: "/notes/",
        children: [
            "算法",
            "八股文",
            '后台管理项目'
        ],
    },
    {
        title: '文章',
        text: "技术博客",
        prefix: "/posts/",
        children: [
            "常见的性能优化手段",
            "如何添加gitignore并删除远程的ignore文件",
            "如何给GitHub项目提交pr",
            "git操作指南",
            "Promise用法"
        ],
    },
]