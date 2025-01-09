var longestCommonPrefix = function(strs) {
    
    let res = ''  // Initialize an empty string to store the result prefix
    
    // Sort the array of strings lexicographically (alphabetically)
    strs.sort()
    
    // After sorting, the first and last strings will have the least and most divergence
    let first = strs[0]  // First string in the sorted array
    let last = strs[strs.length - 1]  // Last string in the sorted array

    // Compare characters of the first and last strings since they represent the extremes
    for(let i = 0; i < first.length; i++) {
        // If characters don't match, break out of the loop
        if(first[i] !== last[i]) break
        
        // If characters match, add it to the result prefix
        res += first[i]
    }
    
    // Return the longest common prefix found
    return res
};