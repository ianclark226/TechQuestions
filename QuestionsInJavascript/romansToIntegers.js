{
    // Define a map of Roman numerals and their integer values
    const roman = {
      'I': 1,    // 1
      'V': 5,    // 5
      'X': 10,   // 10
      'L': 50,   // 50
      'C': 100,  // 100
      'D': 500,  // 500
      'M': 1000  // 1000
    };
  
    let result = 0; // Initialize the result to store the final integer value
  
    // Loop through each character of the input string `s`
    for (let i = 0; i < s.length; i++) {
      const current = roman[s[i]];     // Get the integer value of the current Roman numeral
      const next = roman[s[i + 1]];    // Get the integer value of the next Roman numeral (if it exists)
  
      // If the next numeral is larger, it indicates a subtractive combination (like IV or IX)
      if (next && current < next) {
        result += next - current; // Subtract current from next and add the difference to result
        i++; // Skip the next numeral since it's already processed
      } else {
        // Otherwise, just add the value of the current numeral to the result
        result += current;
      }
    }
  
    // Return the final converted integer value
    return result;
  }
  