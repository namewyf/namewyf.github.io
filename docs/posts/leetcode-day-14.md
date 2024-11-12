---
date: 2024-11-12
category:
  - CategoryA
tag:
  - argorithm
  - tag B
---

# leetcode day 14
## [刷题内容和建议](https://docs.qq.com/doc/DUHN0ZVJuRmVYeWNv)

## 226.翻转二叉树 （优先掌握递归）

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    function func(root){
        if(root){
            [root.left,root.right] = [root.right,root.left]
            func(root.left)
            func(root.right)
            return
        }else{
            return
        }
    }
    func(root)
    return root
};
```
## 101. 对称二叉树

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let left = root.left
    let right = root.right
    function func(left,right){
        if(left&&right){
            if(left.val!=right.val){
                return false
            }
            return func(left.right,right.left)&&func(left.left,right.right)
        }else if(!left&&!right){
            return true
        }else{
            return false
        }
    }
    return func(left,right)

};
```
## 104. 二叉树的最大深度

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let max = 0
    function func(root){
        if(root){
            let a,b
            if(root.left){
                a = func(root.left)
            }else{
                a = 0
            }
            if(root.right){
                b = func(root.right)
            }else{
                b = 0
            }
            return Math.max(a,b)+1
        }else{
            return 0
        }
    }
    return func(root)
};
```
## 111. 二叉树的最小深度

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root===null){
        return 0
    }
    let min = Infinity
    function func(root){
        if(root){
            if(!root.left&&!root.right){
                return 1
            }else{
                return Math.min(func(root.left),func(root.right))+1
            }
        }else{
            return Infinity
        }
    }
    return func(root)
};
```
