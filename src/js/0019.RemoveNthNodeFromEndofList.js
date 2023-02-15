var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let n1 = dummy;
  let n2 = dummy;
  for (let i = 0; i < n; i++) {
    n2 = n2.next;
  }
  while (n2.next != null) {
    n1 = n1.next;
    n2 = n2.next;
  }
  n1.next = n1.next.next;
  return dummy.next;
};
