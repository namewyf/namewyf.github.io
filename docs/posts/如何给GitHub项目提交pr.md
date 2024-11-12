---
date: 2024-11-11
category:
  - CategoryC
tag:
  - tag E
---

# 如何给GitHub项目提交pr

## 把GitHub项目fork到自己的仓库
## 拉取代码到本地进行修改
在本地的某个目录下使用
```
git clone +你要拉取的项目地址
```
>注意，git clone会在当前目录下创建一个项目文件夹，然后把github里的代码放在这个文件夹里，而且git文件夹也会放在里面，因此你需要先cd进入这个项目的文件夹，后续才能使用git add等git指令

进入项目目录下
```
cd 项目名称
```

修改代码

## 上传代码

```
git add .
git commit -m 'xxxx'
git push
```

## 提交pull request

点击项目主页的Contribute->Open pull request

填写好备注后再点击Create pull request