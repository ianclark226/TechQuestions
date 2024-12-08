var crearNodo = function (val) {
    return new ListNode(val);
  }

 var insercion= function(head, val) {
    const newNode = crearNodo(val);

    if (!head) {
      head = newNode;
    } else {
      let current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    return head;
  }
var addTwoNumbers = function(head1, head2) {
      let head3 = null;
    let carry = 0;

    while (head1 || head2) {
      let sum = carry;
      if (head1) {
        sum += head1.val;
        head1 = head1.next;
      }

      if (head2) {
        sum += head2.val;
        head2 = head2.next;
      }

      carry = Math.floor(sum / 10);
      head3 = insercion(head3, sum % 10);
    }

    if (carry > 0) {
      head3 = insercion(head3, carry);
    }

    return head3;
};