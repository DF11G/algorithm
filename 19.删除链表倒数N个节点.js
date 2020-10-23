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
var removeNthFromEnd = function (head, n) {
    let slow = head, fast = head
    while (--n) {
        fast = fast.next
    }
    // 当n等于链表长度，也就是删除头元素时，直接返回第二个元素
    if (fast.next == null) {
        return slow.next
    }
    // 方便目标跨越节点，提前移动一次
    fast = fast.next;
    while (fast.next && fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
    // let fast = head, stack = head;
    // while(--n){
    //     fast = fast.next;
    // }
    // if(!fast.next) return head.next;
    // fast = fast.next;
    // while(fast && fast.next){
    //     fast = fast.next;
    //     stack = stack.next;
    // }
    // stack.next = stack.next.next;
    // return head;
};