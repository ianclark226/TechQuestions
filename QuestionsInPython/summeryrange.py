class Solution(object):
    def summaryRanges(self, nums):
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        if len(nums) == 0:
            return []

        output = []
        begin_var = nums[0]
        prev_var = nums[0]

        for i in range(1, len(nums)):
            if nums[i] - prev_var > 1:
                prev_var = nums[i-1]
                if begin_var == prev_var:
                    output.append(str(begin_var))
                else: 
                    temp = str(begin_var) + "->" + str(prev_var)
                    output.append(temp)
                begin_var = nums[i]
            prev_var = nums[i]
        if begin_var == nums[-1]:
            output.append(str(begin_var))
        else: 
            temp = str(begin_var) + "->" + str(nums[-1])
            output.append(temp)
        return output