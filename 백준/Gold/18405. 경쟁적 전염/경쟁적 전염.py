import sys
from collections import deque
input = sys.stdin.readline
dx = [0,0,1,-1]
dy = [1,-1,0,0]

#S초가 지난 후에 (X,Y)에 존재하는 바이러스의 종류를 출력
def bfs(S, X, Y, count) : 
    dQ = deque(alist) 
    
    while dQ :
        virus, x, y, count = dQ.popleft()
        if count == S :
            break
        
        for i in range(4) :
            xx = x + dx[i]
            yy = y + dy[i]
            
            if 0<=xx<n and 0<=yy<n :
                if board[xx][yy] == 0 :
                    board[xx][yy] = virus
                    dQ.append((virus, xx, yy, count+1))
                    

n, k = map(int, input().split()) #k:바이러스의 종류1~k번 
board = [list(map(int, input().split())) for _ in range(n)]
S, X, Y = map(int, input().split()) 

#list에 바이러스 번호 넣고, sort한 후에 dQ에 append 
# (바이러스 번호, i, j, 시간)
alist = list()
for i in range(n) :
    for j in range(n) :
        if board[i][j] != 0 :
            alist.append((board[i][j], i, j, 0))
alist.sort() #바이러스 순으로 sort 
bfs(S, X, Y, 0)
print(board[X-1][Y-1])
