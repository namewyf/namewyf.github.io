---
date: 2024-11-05
category:
  - CategoryA
tag:
  - argorithm
  - tag B
---

# leetcode day 4
##[刷题内容和建议](https://docs.qq.com/doc/DUFNjYUxYRHRVWklp)

## 24. 两两交换链表中的节点
<https://leetcode.cn/problems/swap-nodes-in-pairs/description/>
注意画图，以防弄错
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
var swapPairs = function(head) {
    let newHead = new ListNode(0,head)
    let i = newHead;
    while(i.next){
        if(i.next.next){
            //交换
            let a1 = i
            let a2 = i.next
            let a3 = i.next.next
            let a4 = i.next.next.next
            a1.next = a3
            a3.next = a2
            a2.next = a4
        }else{
            return newHead.next
        }
        i = i.next.next
    }
    return newHead.next
};
```

## 19.删除链表的倒数第N个节点 
<https://leetcode.cn/problems/remove-nth-node-from-end-of-list/> 
### 双指针法
略
### 递归法
时间复杂度和
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let newHead = new ListNode()
    newHead.next = head
    var i = n
    function func(head, n) {
        if (head === null) {
            return
        } else {
            func(head.next, n)
            i--
        }
        if (i === -1) {
            head.next = head.next.next
        }
        return head

    }
    return func(newHead, n).next

};
```
## 160.链表相交
<https://leetcode.cn/problems/intersection-of-two-linked-lists/description/>

1.这个地方用!=和!==都是可行的，注意!==是没有类型转换的，是严格比较，而!=是先转换后再比较  
2.这个地方是不会出现无限循环的，因为如果两个链表不相交，最后会同时移动到null，这时候A和B相等，跳出循环;而如果两个链表长度相同，他们会在相交结点那里相遇
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    let A = headA;
    let B = headB;
    if(A===null||B ===null){
        return null;
    }
    //这个地方是不会出现无限循环的，因为如果两个链表不相交，最后会同时移动到null，这时候A和B相等，跳出循环
    //而如果两个链表长度相同，他们会在相交结点那里相遇
    while (A!==B) {//这个地方用!=和!==都是可行的，注意!==是没有类型转换的，是严格比较，而!=是先转换后再比较
        A = A === null ?headB:A.next;
        B = B === null ?headA:B.next;
    }
    if (A === B) {
        return A
    } else {
        return null
    }
};
```

## 142.环形链表II 

### 哈希表法
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    const map1 = new Map();
    let top = head
    let num = -1
    while (top) {
        if (map1.has(top)) {
            return top
        } else {
            num++
            map1.set(top, num)
            top = top.next
        }
    }
    return null
};
```

![img](/leetcode-day-4/142.png)
### 快慢指针法

