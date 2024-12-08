/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    const rows = box.length, cols = box[0].length;
    const result = Array.from({ length: cols }, () => Array(rows).fill('.')); // Initialize result matrix

    // Process each row of the box
    for (let i = 0; i < rows; i++) {
        let emptyPosition = cols - 1; // Track the lowest position for stones
        for (let j = cols - 1; j >= 0; j--) {
            if (box[i][j] === '*') {
                // Obstacle: place it in the result and reset the empty position
                result[j][rows - i - 1] = '*';
                emptyPosition = j - 1;
            } else if (box[i][j] === '#') {
                // Stone: move it to the lowest available position
                result[emptyPosition][rows - i - 1] = '#';
                emptyPosition--;
            }
        }
    }

    return result;
};