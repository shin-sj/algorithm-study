import sys
from collections import deque
input = sys.stdin.readline
dx = [0,0,1,-1]
dy = [1,-1,0,0]

def bfs(x, y) :
    dQ = deque()
    dQ.append((x, y))
    global size
    
    while dQ :
        x, y = dQ.popleft()
        
        for i in range(4) :
            xx = x + dx[i]
            yy = y + dy[i]
            if 0<=xx<n and 0<=yy<m :
                if board[xx][yy] == 1 :
                    size += 1
                    board[xx][yy] = 0
                    dQ.append((xx, yy))

n, m = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
cnt = 0
maxSize = 0

for i in range(n) :
    for j in range(m) :
        if board[i][j] == 1 :
            size = 1
            board[i][j] = 0 
            bfs(i, j)
            maxSize = max(size, maxSize)
            cnt += 1
print(cnt)
print(maxSize)