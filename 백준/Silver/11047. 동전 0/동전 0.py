#동전 0 - greedy algorithm
import sys
input = sys.stdin.readline

n, k = map(int, input().split()) #n은 동전의 종류의 개수, k는 만들어야할 금액
coin = []

#동전은 오름차순으로 주어진다. 
for _ in range(n) :
    tmp = int(input())
    coin.append(tmp)
cnt = 0
coin.sort(reverse=True)
# print(coin)
tmp = k
for c in coin :
    if k >= c :
        tmp -= c * (k // c)
        cnt += (k // c) 
    k = tmp
print(cnt)