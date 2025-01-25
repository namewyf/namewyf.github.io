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
            '后台管理项目',
            "后台管理项目脚手架"
        ],
    },
    {
        title: '文章',
        text: "技术文章",
        prefix: "/posts/",
        children: [
            "常见的性能优化手段",
            "如何添加gitignore并删除远程的ignore文件",
            "如何给GitHub项目提交pr",
            "小米android前端面经",
            "git操作指南",
            "Promise用法",
            "混合使用commonjs和esm",
            "模拟面试项目拷打1",
            "项目综合模拟面试",
            "如何注册和使用域名",
            "git提交规范",
            {
                text: "Mysql的并发控制实验",
                link:"/posts/Mysql的并发控制/",
            }
        ],
    },
]