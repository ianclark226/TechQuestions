var maxSum = function (a) {
    let o = {} // max digit of numbers   :   numbers
    for (let e of a) {
      let se = '' + e
      let sea = se.split('').map((e) => +e).sort((a, b) => b - a)
      let maxDigit = +sea[0]
      o[maxDigit] = o[maxDigit] || []
      o[maxDigit].push(e)
    }
  
    let max2sum = -1
    for (let k in o) {
      let nums = o[k]
      if (nums.length > 1) {
        nums.sort((a, b) => b - a)
        let sumOf2MaxNumbers = nums[0] + nums[1]
        max2sum = Math.max(max2sum, sumOf2MaxNumbers)
      }
    }
    return max2sum
  }