import sys, math
input = sys.stdin.readline

n, m = map(int, input().split()) #n:아이들의 수, m:색상의 수 
alist = list() #보석의 개수
for _ in range(m) :
    alist.append(int(input()))
alist.sort() 
result = max(alist)
lt = 1
rt = max(alist)

while lt <= rt :
    mid = (rt + lt) // 2
    cnt = 0
    for a in alist : 
        cnt += math.ceil(a/mid) #올림

    if cnt <= n :
        result = min(mid, result)
        rt = mid - 1
    else :
        lt = mid + 1
print(result)