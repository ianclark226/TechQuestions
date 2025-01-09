var maxScore = function(s) {
    // Array to store the prefix sum of '1's in the string
    let prefix = []
    let count = 0
    let max = 0
 
    // First pass to calculate the prefix sum of '1's
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === '1') {
            // If the character is '1', increment the count and store it in the prefix array
            prefix[i] = ++count
        } else {
            // If the character is '0', store the current count without incrementing
            prefix[i] = count
        }
    }
 
    // Reset count to count '0's for the left partition
    count = 0
 
    // Second pass to calculate the maximum score
    // Loop until `s.length - 1` because the split needs to be valid
    for(let i = 0; i < s.length - 1; i++) {
        if(s.charAt(i) === '0') {
            // Count the number of '0's in the left partition
            count++
        }
        // Calculate the score for the current split
        // Left score: count of '0's (count)
        // Right score: total '1's - '1's in the left partition (prefix[prefix.length - 1] - prefix[i])
        max = Math.max(max, count + prefix[prefix.length - 1] - (prefix[i] || 0))
    }
 
    // Return the maximum score found
    return max
 };
 