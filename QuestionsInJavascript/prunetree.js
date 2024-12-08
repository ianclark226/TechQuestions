// Time complexity: O(n)
// Space complexity: O(n)

var pruneTree = function(root) {
    
	function containsOne(node) {
		if (node == null) 
			return false;
			
		const leftContainsOne = containsOne(node.left);
		const rightContainsOne = containsOne(node.right);
		
		 if (!leftContainsOne) 
			node.left = null;
			
		if (!rightContainsOne) 
			node.right = null;
			
		return node.val == 1 || leftContainsOne || rightContainsOne;
	}
	
	return containsOne(root) ? root : null;
};