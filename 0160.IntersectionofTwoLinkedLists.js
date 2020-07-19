var getIntersectionNode = function (headA, headB) {
  let n1 = headA;
  let n2 = headB;
  while (n1 !== n2) {
    if (n1 === null) {
      n1 = headB;
    } else {
      n1 = n1.next;
    }
    if (n2 === null) {
      n2 = headA;
    } else {
      n2 = n2.next;
    }
  }
  return n1;
};
