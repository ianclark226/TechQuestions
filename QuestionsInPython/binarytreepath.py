# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def binaryTreePaths(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: List[str]
        """
        res = []
        def dfs(root, st):
            if not root:
                return
            st += str(root.val)
            if not root.left and not root.right:
                res.append(st)
            
            dfs(root.left, st + "->")
            dfs(root.right, st + "->")
            return 
        
        dfs(root, "")
        return res
        