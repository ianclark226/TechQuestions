class Solution(object):
    def rotateTheBox(self, box):
        """
        :type boxGrid: List[List[str]]
        :rtype: List[List[str]]
        """
        for row in box:
            dropPos = len(row) - 1  
            
            for currPos in range(len(row)-1, -1, -1):
                if row[currPos] == "*":  
                    dropPos = currPos - 1
                elif row[currPos] == "#":  
                    row[dropPos], row[currPos] = row[currPos], row[dropPos]
                    dropPos -= 1

        rotatedBox = zip(*box[::-1])
        return rotatedBox
        