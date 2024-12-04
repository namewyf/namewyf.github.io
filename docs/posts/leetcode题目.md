---
date: 2024-12-03
category:
  - CategoryA
tag:
  - argorithm
  - tag B
---
# leetcode题目

### F136. 只出现一次的数字

1. 异或运算，^，先会把两边的数字转换为二进制，然后进行异或运算，如果两边的数字相同，那么结果就是0，如果两边的数字不相同，那么结果就是1
2. for of和for in的区别:for of遍历的是数组/对象中的值，for in遍历的是对象中的键
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0
    for(const element of nums){
        ans^= element
    }
    return ans
};
```

