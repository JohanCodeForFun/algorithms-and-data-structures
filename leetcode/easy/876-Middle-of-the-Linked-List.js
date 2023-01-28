// 876. Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

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

// simplified solution
var middleNode = function (head) {
  // fast is going twice the speed of slow, reaching end first.
  // slow is going half the speed, which will be middle.
  // if the linked list is even, it will return the right middle value.
  let fast = (slow = head);
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

// descriptive solution
// var middleNode = function (head) {
//   let half = head;
//   let end = head;
//   while (end !== null && end.next !== null) {
//     half = half.next;
//     end = end.next.next;
//   }
//   return half;
// };

const result = middleNode([1, 2, 3, 4, 5]);
console.log(result);
