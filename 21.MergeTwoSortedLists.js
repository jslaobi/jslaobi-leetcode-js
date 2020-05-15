var mergeTwoLists = function (l1, l2) {
  let curr = new ListNode();
  let dummy = curr;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  if (l1 !== null) {
    curr.next = l1;
  }

  if (l2 !== null) {
    curr.next = l2;
  }

  return dummy.next;
};
