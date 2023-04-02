#미로탐색
import sys
from collections import deque
input = sys.stdin.readline
dx = [0,0,-1,1]
dy = [1,-1,0,0]

n, m = map(int, input().split())
board = [list(map(int, input().rstrip())) for _ in range(n)] # readline의 경우 맨 뒤에 '\n'까지 입력받으므로 제거해줘야 함
dQ = deque()
for i in range(n) :
    for j in range(m) :
        if board[i][j] == 1 :
            # board[i][j] = 0 #한번 지나간 곳은 0으로 바꿔서 다시 돌아갈일x
            dQ.append((i, j))
            
        
        while dQ : 
            x, y = dQ.popleft()
            
            for k in range(4) :
                xx = x + dx[k]
                yy = y + dy[k]
                if 0<=xx<n and 0<=yy<m :
                    if board[xx][yy] == 1 :
                        board[xx][yy] = board[x][y] + 1
                        dQ.append((xx,yy))
                        
print(board[n-1][m-1])
                        
                
                