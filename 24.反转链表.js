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
var reverseList = function (head) {
    let cur = head, temp, old = null
    while (cur) {
        temp = cur.next
        cur.next = old
        old = cur
        cur = cur.next
    }
    return old
}