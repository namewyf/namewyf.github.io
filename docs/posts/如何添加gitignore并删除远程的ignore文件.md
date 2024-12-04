# 如何修改gitignore并删除远程的ignore文件

## 背景
有时候我们新建一个项目，忘了创建gitignore文件，导致项目被git管理，而且很多日志文件和模块都被上传到了github仓库；而gitignore只对没有commit过的文件夹有效

## 目标
想把项目从git仓库中删除，保留本地的代码，并且添加.gitingore文件

## 解决

1. 跟目录修改 gitignore文件
2. 执行：
删除本地目录下的缓存
```
git rm -r --cached .
```
3. 提交
```
git add .
git commit -m 'xx'
git push
```


