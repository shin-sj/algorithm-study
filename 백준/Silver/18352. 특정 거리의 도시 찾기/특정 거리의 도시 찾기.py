import sys
from collections import deque
input = sys.stdin.readline
def bfs(x) :
    dQ = deque()
    dQ.append(x)
    
    while dQ :
        x = dQ.popleft()
        for b in board[x] :
            if visited[b] == -1 :
                visited[b] = visited[x] + 1
                dQ.append(b)               

#n:도시의개수, m:도로의개수, k:거리정보, x:출발도시의번호
n, m, k, x = map(int, input().split())
board = [[] for _ in range(n+1)]
visited = [-1] * (n+1)
for _ in range(m) :
    a, b = map(int, input().split())
    board[a].append(b) #단방향 도로 
    
visited[x] = 0
bfs(x)
flag = 0
for i in range(1, len(visited)) :
    if visited[i] == k :
        print(i)
        flag = 1
if flag == 0 :
    print(-1)