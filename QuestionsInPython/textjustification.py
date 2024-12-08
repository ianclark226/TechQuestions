class Solution(object):
    def fullJustify(self, words, maxWidth):
        """
        :type words: List[str]
        :type maxWidth: int
        :rtype: List[str]
        """
        c = 0
        words.append(" "*maxWidth)
        ans = []
        line = []
        for i, w in enumerate(words):
            if c + len(line) - 1 + len(w) >= maxWidth:
                j = 0
                if len(line) == 1: line[0] += " "*(maxWidth-c)
                elif i == len(words) - 1:
                    for z in range(len(line)-1): line[z] += " "
                    line[-1] += " " * (maxWidth-len(line)+1 - c)
                else:
                    for _ in range(maxWidth - c):
                        if j < len(line) - 1: # if not the last word in line
                            line[j] += " "
                        j = (j+1)%(len(line)-1)
                ans.append("".join(line))
                c = 0
                line = []
            
            c += len(w)
            line.append(w)
        return ans
        