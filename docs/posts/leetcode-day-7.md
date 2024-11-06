---
date: 2024-11-05
category:
  - CategoryA
tag:
  - argorithm
  - tag B
---

# leetcode day 7
## [刷题内容和建议](https://docs.qq.com/doc/DUElCb1NyTVpXa0Jj)

## 454.四数相加II 
<https://leetcode.cn/problems/4sum-ii/>


```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let n = nums1.length
    let map1 = new Map()
    let nums = 0
    for(const n1 of nums1){
        for(const n2 of nums2){
            let sum = n1 + n2
            map1.set(sum,(map1.get(sum)||0)+1)
        }
    }
    for(const n3 of nums3){
        for(const n4 of nums4){//为什么要用const
            let sum = n3 + n4
            if(map1.has(-sum)){//acm模式如何调试？
                nums+=map1.get(-sum)//这里不应该只是nums++
            }

        }
    }
    return nums
};
```


## T383. 赎金信 
<https://leetcode.cn/problems/ransom-note/description/>
 
1.map.set(magazine[i],(map.get(magazine[i])||0)+1)这里的写法值得学习，特别是||的使用
```javascript
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map()
    for(let i = 0;i<magazine.length;i++){
        map.set(magazine[i],(map.get(magazine[i])||0)+1)//这里值得学习
    }
    for(let j = 0;j<ransomNote.length;j++){
        if(map.get(ransomNote[j])){
            map.set(ransomNote[j],map.get(ransomNote[j])-1)
        }else{
            return false
        }
    }
    return true
};
```

## 15. 三数之和 
<https://leetcode.cn/problems/3sum/description/>

##  18. 四数之和  

