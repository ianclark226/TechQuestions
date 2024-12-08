# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def removeElements(self, head, val):
        """
        :type head: Optional[ListNode]
        :type val: int
        :rtype: Optional[ListNode]
        """
        dummy = ListNode(-1)
        dummy.next = head
        current = dummy
        
        while current.next:
            if current.next.val == val:
                current.next = current.next.next  # Remove node
            else:
                current = current.next  # Move to next node
        
        return dummy.next
        