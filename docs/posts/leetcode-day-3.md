---
date: 2024-10-31
category:
  - CategoryA
tag:
  - argorithm
  - tag B
---

# Leetcode day 1
## [刷题内容和建议](https://docs.qq.com/doc/DUG9UR2ZUc3BjRUdY)

## 704.二分查找
<https://leetcode.cn/problems/binary-search/>


注意要选择的区间是左闭右闭还是左闭右开，这样才能知道如何选择<=还是<
```javascript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let right = nums.length - 1
    let left = 0
    let mid = Math.ceil((right + left) / 2)
    while (left <= right) {
        if (target > nums[mid]) {
            left = mid + 1
        } else if (target < nums[mid]) {
            right = mid - 1
        } else {
            return mid
        }
        mid = Math.ceil((right + left) / 2)
    }
    return -1
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));

```


## 27. 移除元素
<https://leetcode.cn/problems/remove-element/>

暴力法
```javascript
/**暴力法
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let tmp = []
    let num = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i]!=val){
            tmp.push(nums[i])
            num++
        }
    }
    for(let j = 0;j<tmp.length;j++){
        nums[j] = tmp[j]
    }
    return num
};
```

双指针法
```javascript

/**双指针法
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[j] = nums[i]
            j++
        }

    }
    return j
};
```

## 977.有序数组的平方
<https://leetcode.cn/problems/squares-of-a-sorted-array/>

双指针法
```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let newArr = []
    let left = 0, right = nums.length - 1
    let max
    while (left <= right) {
        let left2 = nums[left] * nums[left]
        let right2 = nums[right] * nums[right]
        if (left2 < right2) {
            max = right2
            right--
        } else {
            max = left2
            left++
        }
        newArr.unshift(max)
    }

    return newArr
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));
```

