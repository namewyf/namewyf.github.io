---
date: 2024-11-06
category:
  - CategoryA
tag:
  - argorithm
  - tag B
---

# leetcode day 8
## [刷题内容和建议](https://docs.qq.com/doc/DUGdsY2JFaFhDRVZH)

## 344. 反转字符串
<https://leetcode.cn/problems/reverse-string/description/>

记得数组的最后一个元素的下标是length-1
```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length -1//记得数组的最后一个元素的下标是length-1
    let tmp
    for(;left<=right;left++,right--){
        tmp = s[right]
        s[right] = s[left]
        s[left] = tmp
    }
};
```

## F541. 反转字符串 II
<https://leetcode.cn/problems/reverse-string-ii/description/>

注意Math.min(i+k,n) - 1这里的处理，非常妙
```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let n = s.length
    const arr = s.split('')
    for(let i = 0;i<n;i += 2*k){
        reverse(arr,i,Math.min(i+k,n) - 1)
    }
    return arr.join('')
};


const reverse = (arr, left, right) => {
    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
```

## 54. 替换数字（第八期模拟笔试）
<https://kamacoder.com/problempage.php?pid=1064>

注意判断是否是NaN要用isNaN()方法，而不是===NaN这样是不合规的
```javascript
function func() {
    const readline = require('readline')
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let str = ''
    rl.on('line', function (line) {
        str = line
        rl.close()
    })
    rl.on('close', function(){
        let out = str.split('').map((s) => {
            if (isNaN(Number(s))) {
                return s
            } else {
                return 'number'
            }
        })
        console.log(out.join(''));
    })
}
func()
```