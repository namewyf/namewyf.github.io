---
date: 2024-11-27
category:
  - CategoryC
tag:
  - tag E
sticky: 4
---
# git操作指南

## 重命名一个git分支
```
git checkout old-branch-name
git branch -m new-branch-name

删除远程分支（如果已经推送过）：
git push origin --delete old-branch-name
推送新的分支名称到远程仓库：
git push origin new-branch-name
设置新的分支为默认跟踪分支：
git push --set-upstream origin new-branch-name
```