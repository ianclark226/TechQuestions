class Solution(object):
    def restoreArray(self, adjacentPairs):
        """
        :type adjacentPairs: List[List[int]]
        :rtype: List[int]
        """
        G = defaultdict(lambda: {'n': [], 'v': False})
        ans = []
        start = float('inf')
        
        for l,r in adjacentPairs:           
            G[l]['n'].append(r)
            G[r]['n'].append(l)
        
        for i,j in G.items():
            if len(j['n']) == 1:
                start = i
                break
                        
        while G[start]['v'] == False:
            ans.append(start)
            G[start]['v'] = True
            for nxt in G[start]['n']:
                if G[nxt]['v'] == False:
                    start = nxt
                    break
                    
        return ans

        