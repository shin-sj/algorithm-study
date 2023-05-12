import sys
from collections import Counter

def solution(nums):
    answer = 0
    cnt = len(nums)//2
    adict = Counter(nums)
    # print(adict)
    if len(adict) >= cnt :
        answer = cnt
    else :
        answer = len(adict)
    
    return answer