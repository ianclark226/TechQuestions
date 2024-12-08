/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfArrays = function(s, k) 
{
    const MOD = 1e9+7;
    let ways = Array(11);

    /*
        For each digit map the number of subarrays starting with a number
        which starts on that digit.  There's 1 extra empty subarray past the
        last digit needed to make the calculations work.
    */
    ways[0] = 1;
    for(let i=s.length-1; i>=0; i--)
    {
        /* Make room for the next digit. */
        for(let j=ways.length-1; j>0; j--)
            ways[j] = ways[j-1];

        if(s[i] === '0')
        {
            ways[0] = 0;
            continue;
        }

        /* Find the ways to start at this digit - add the ways for each number formed. */
        let num = 0, newWays = 0;
        for(let j=i; j<s.length; j++)
        {
            num = num*10+(s[j]-0);
            if(num > k)
                break;
            newWays = (newWays + ways[j+1-i])%MOD;
        }
        ways[0] = newWays;
    }

    return ways[0];
};