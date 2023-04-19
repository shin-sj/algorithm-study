import sys
input = sys.stdin.readline

#n : 강의의 수, m: 블루레이의 개수 
n, m = map(int, input().split())
alist = list(map(int, input().split()))
lt = max(alist)
rt = sum(alist)

while lt <= rt :
    mid = (lt+rt) // 2
    cnt = 0
    tmp = 0
    for i in range(n) :
        if tmp + alist[i] > mid :
            cnt += 1
            tmp = 0
        tmp += alist[i]
    if tmp :
        cnt += 1
    
    if cnt > m :
        lt = mid + 1 
    else :
        rt = mid - 1
print(lt)