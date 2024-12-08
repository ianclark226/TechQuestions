var getBiggestThree = function (grid) {
    let n = grid.length;
    let m = grid[0].length;
    let ans = [0, 0, 0];

    // Iterate through each cell in the grid
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            // Iterate through possible diamond shapes around the current cell
            for (let d = 0; d < 40; d++) {
                let top = r - d;
                let left = c - d;
                let right = c + d;
                let bottom = r + d;

                // Check if the diamond shape is within the grid boundaries
                if (
                    top < 0 ||
                    left < 0 ||
                    right >= m ||
                    bottom >= n
                ) break;

                let cnt = d === 0 ? grid[r][c] : 0;
                let _c = c;

                // Traverse top side of the diamond
                while (top !== r) {
                    cnt += grid[top][_c];
                    top += 1;
                    _c += 1;
                }

                // Traverse right side of the diamond
                let _r = r;
                while (right !== c) {
                    cnt += grid[_r][right];
                    _r += 1;
                    right -= 1;
                }

                // Traverse bottom side of the diamond
                _c = c;
                while (bottom !== r) {
                    cnt += grid[bottom][_c];
                    bottom -= 1;
                    _c -= 1;
                }

                // Traverse left side of the diamond
                _r = r;
                while (left !== c) {
                    cnt += grid[_r][left];
                    left += 1;
                    _r -= 1;
                }

                // Update the top three maximum values
                let [one, two, three] = ans;
                if (cnt > one) {
                    ans[0] = cnt;
                    ans[1] = one;
                    ans[2] = two;
                } else if (cnt > two && cnt < one) {
                    ans[1] = cnt;
                    ans[2] = two;
                } else if (cnt > three && cnt < two) {
                    ans[2] = cnt;
                }
            }
        }
    }

    // Filter out any zeros from the result and return the top three values
    ans = ans.filter((i) => i !== 0);
    return ans;
};