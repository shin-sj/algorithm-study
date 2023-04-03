import sys
input = sys.stdin.readline

tc = int(input())
for i in range(tc):
    n, m = map(int, input().split()) #n: A의 수, m: B의 수 
    alist = list(map(int, input().split())) #A의 크기
    blist = list(map(int, input().split())) #B의 크기 
    
    alist.sort(reverse=True)
    blist.sort(reverse=True)
    
    aIdx = 0
    bIdx = 0
    cnt = 0
    
    while aIdx < n and bIdx < m :
        if alist[aIdx] > blist[bIdx] : 
            cnt += m - bIdx
            aIdx += 1
        else :
            bIdx += 1
        
    print(cnt)