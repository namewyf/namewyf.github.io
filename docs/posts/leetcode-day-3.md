---
date: 2024-11-04
category:
  - CategoryA
tag:
  - argorithm
  - tag B
---

# Leetcode day 3
## [刷题内容和建议](https://docs.qq.com/doc/DUGdqYWNYeGhlaVR6)

## 203.移除链表元素
<https://leetcode.cn/problems/remove-linked-list-elements/description/>

### 错解
1.当出现增删改的时候都是需要创建虚拟结点newHead的  
2.如果发现值等于目标删除的结点，删除后不需要再cur = cur.next了，因为这个地方while检验的是cur.next的值，当删除cur.next结点后，cur.next指向的就是下次循环要检验的结点了不需要在cur = cur.next了
```javascript
/**
 * Definition for singly-lincured list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var removeElements = function (head, val) {
    let newHead = new ListNode(0, head)
    let cur = newHead
    while (cur.next != null) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        }
        cur = cur.next//如果发现值等于目标删除的结点，删除后不需要再cur = cur.next了
    }
    return newHead.next
};
```
### 正解
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const dummy = new ListNode(0, head);
    let cur = dummy;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return dummy.next
    
};
```

## 707.设计链表 
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

##  206.反转链表 
<https://leetcode.cn/problems/squares-of-a-sorted-array/>

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let k = head;
    let pre = null
    while(k){
        let l = k
        k = k.next
        l.next = pre
        pre = l
    }
    return pre
};
```

