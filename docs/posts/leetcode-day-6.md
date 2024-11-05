---
date: 2024-11-05
category:
  - CategoryA
tag:
  - argorithm
  - tag B
---

# leetcode day 6
##[刷题内容和建议](https://docs.qq.com/doc/DUEtFSGdreWRuR2p4)

##  242.有效的字母异位词 
<https://leetcode.cn/problems/valid-anagram/>

使用map
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map = new Map()//也可以26个字母作为哈希表，而不是以s作为哈希表
    if (s.length != t.length) {
        return false
    }
    for (let i = 0; i < t.length; i++) {
        if (map.has(s[i])) {
            let tmp = map.get(s[i])
            map.set(s[i], ++tmp)
        } else {
            map.set(s[i], 1)
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (map.has(t[j])) {
            let tmp = map.get(t[j])
            tmp===1?map.delete(t[j]):map.set(t[j], --tmp)
        } else {
            return false
        }
    }
    return true
};
```

## 349. 两个数组的交集 
<https://leetcode.cn/problems/intersection-of-two-arrays/description/>

注意发现重复之后要删除对应的map元素
```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map = new Map()
    let out = []
    for(let i = 0;i<nums1.length;i++){
        map.set(nums1[i],1)
    }
    for(let j = 0;j<nums2.length;j++){
        if(map.has(nums2[j])){
            out.push(nums2[j])
            map.delete(nums2[j])
        }
    }
    return out
};
```

##  202. 快乐数
<https://leetcode.cn/problems/happy-number/description/>

注意题目已经告诉我们，非快乐数到最后是会无限循环的  
1.做题之前先考虑为什么要用哈希表，用在哪个地方，这样才不会写到一半，发现写错了  
2.当有涉及各个位数数字的计算时，这里是向下取整而不是四舍五入  
3.这里的while不设置条件，直到有返回值为止，说明不是所有循环都要有条件值
```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    //做题之前先考虑为什么要用哈希表，用在哪个地方，这样才不会写到一半，发现写错了
    let map = new Map()
    function cal(n) {
        let sum = 0
        while (n > 0) {
            sum += (n % 10) * (n % 10)
            n = Math.floor(n / 10)//这里是向下取整而不是四舍五入

        }
        return sum
    }
    while (true) {//这里不设置条件，直到有返回值为止
        let num = cal(n)
        if (num === 1) {
            return true
        } else if (map.has(num)) {
            return false
        } else {
            map.set(num, 1)
        }
        n = num
    }
};
```

##  1. 两数之和 
<https://leetcode.cn/problems/two-sum/>

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const idx = new Map()
    for (let i = 0; i < nums.length; i++) {
        let tmp = target - nums[i]
        if (idx.has(tmp)) {
            return [idx.get(tmp), i]
        }
        idx.set(nums[i], i)

    }
};
```

