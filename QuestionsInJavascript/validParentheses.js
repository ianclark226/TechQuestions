/**
 * Checks if a string containing parentheses, curly braces, and square brackets is valid.
 * A valid string requires all pairs to be properly closed and nested.
 * @param {string} s - The input string containing brackets.
 * @return {boolean} - True if the string is valid, otherwise false.
 */
var isValid = function(s) {
    // Continue removing valid pairs while any of them exist in the string
    while(s.includes('()') || s.includes('{}') || s.includes('[]')) {
        // Remove all instances of valid pairs
        s = s.replace('()', '')  // Remove pairs of parentheses
        s = s.replace('{}', '')  // Remove pairs of curly braces
        s = s.replace('[]', '')  // Remove pairs of square brackets
    }

    // If the string is completely empty after all removals, it was valid
    return s === ''  
};
