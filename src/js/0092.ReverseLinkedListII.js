var reverseBetween = function (head, m, n) {
  let prev = null;
  let curr = head;
  for (let i = 1; i < m; i++) {
    prev = curr;
    curr = curr.next;
  }

  let prev2 = prev;
  let curr2 = curr;

  for (let i = m; i <= n; i++) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  if (m > 1) {
    prev2.next = prev;
  } else {
    head = prev;
  }
  curr2.next = curr;
  return head;
};
