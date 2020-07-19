var oddEvenList = function (head) {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }

  let odd = head;
  let even = head.next;
  let evenHead = head.next;
  while (even !== null && even.next !== null) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};
