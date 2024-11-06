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

