#토마토
import sys
from collections import deque
input = sys.stdin.readline
dx = [0,0,-1,1]
dy = [1,-1,0,0]

m, n = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(n)]
dQ = deque()

for i in range(n) :
    for j in range(m) :
        if board[i][j] == 1 :
            dQ.append((i, j))

        #while을 어느 시점에서 돌려야하는지?        
while dQ :
    x, y = dQ.popleft()
    for k in range(4) :
        xx = x + dx[k]
        yy = y + dy[k]
                
        if 0<=xx<n and 0<=yy<m :
            if board[xx][yy] == 0 :
                board[xx][yy] = board[x][y] + 1
                dQ.append((xx,yy))
ans = 0                   
for i in range(n) :
    for j in range(m) :
        if board[i][j] == 0 :
            print(-1)
            exit(0) #끝내기 
        else : 
            ans = max(ans, board[i][j])
print(ans-1)
        
                        
                
    