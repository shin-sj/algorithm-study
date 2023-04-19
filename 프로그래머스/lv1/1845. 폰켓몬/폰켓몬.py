def solution(nums):
    answer = 0
    adict = {}
    n = len(nums) / 2
    
    #딕셔너리 포켓몬:갯수
    for a in nums :
        adict[a] = nums.count(a) 
        
    if len(adict) >= n :
        return n
    else :
        return len(adict)