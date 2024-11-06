---
date: 2024-11-03
category:
  - CategoryA
tag:
  - argorithm
  - tag B
---

# Leetcode day 2
## [刷题内容和建议](https://docs.qq.com/doc/DUGRwWXNOVEpyaVpG)

##  209.长度最小的子数组
<https://leetcode.cn/problems/minimum-size-subarray-sum/>

1.注意要选择的区间是左闭右闭还是左闭右开，这里我选的是左闭右开
2.min可以定义为nums的长度，因为这个最小值不可能大于nums的长度
3.因为当right出去后，left还有往右的可能，可以使得min最小，所以不能一旦right跳出去就跳出循环，要用while循环而不是以right为下标的for循环
```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0//不包括right
    let right = 0
    let sum = 0
    let min = nums.length + 1, num = 0//min可以定义为nums的长度，因为这个最小值不可能大于nums的长度
    while (left <= right && right <= nums.length) {//这里应该看left的值，因为当right出去后，left还有往右的可能，可以使得min最小
        if (sum < target) {
            sum += nums[right]
            right++
            num++
        } else {
            min = min < num ? min : num
            sum -= nums[left]
            left++
            num--
        }
    }
    return min > nums.length ? 0 : min
};

```


##  59.螺旋矩阵II
<https://leetcode.cn/problems/spiral-matrix-ii/description/>

不能通过var arr = new Array(10).fill(new Array(10).fill(0))这样创建二维数组，第一个值赋值的时候第一列所有的值都会被赋值
```javascript
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let arr = new Array(n); 
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(n).fill(0); 
    }
    let x = 0, y = 0;
    let val = 1
    function func(x, y, val, n) {
        if (n === 1) {
            arr[x][y] = val
        }
        for (let i = 0; i < n - 1; i++) {
            arr[x][y] = val
            y++
            val++
        }
        for (let j = 0; j < n - 1; j++) {
            arr[x][y] = val
            x++
            val++
        }
        for (let k = 0; k < n - 1; k++) {
            arr[x][y] = val
            y--
            val++
        }
        for (let l = 0; l < n - 1; l++) {
            arr[x][y] = val
            x--
            val++
        }
        if (n - 2 > 0) {

            func(x + 1, y + 1, val, n - 2)
        }
    }
    func(x, y, val, n)
    return arr
};
generateMatrix(3)
```

## 58. 区间和（第九期模拟笔试）
<https://kamacoder.com/problempage.php?pid=1070>

注意这里是acm模式的算法题，不是说只用写个函数出来就行的，要引入readline，读取控制台的输入
```javascript
function prefixSum() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let inputLines = [];
    rl.on('line', (line) => {
        inputLines.push(line.trim());
    });

    rl.on('close', () => {
        // 读取项数 n
        const n = parseInt(inputLines[0]);

        // 使用前缀和，复杂度控制在 O(1)
        let sum = new Array(n);
        sum[0] = parseInt(inputLines[1]);

        // 计算前缀和数组
        for (let i = 1; i < n; i++) {
            let value = parseInt(inputLines[i + 1]);
            sum[i] = sum[i - 1] + value;
        }

        // 处理区间和查询
        for (let i = n + 1; i < inputLines.length; i++) {
            let [left, right] = inputLines[i].split(' ').map(Number);

            if (left === 0) {
                console.log(sum[right]);
            } else {
                console.log(sum[right] - sum[left - 1]);
            }
        }
    });
}
prefixSum()
```

## 44. 开发商购买土地（第五期模拟笔试）
<https://kamacoder.com/problempage.php?pid=1044>