import sys
from collections import deque
input = sys.stdin.readline
def bfs(x) :
    dQ = deque()
    dQ.append(x)
    
    while dQ :
        start = dQ.popleft() 
        for i in board[start] :
            if visited[i] == -1 :
                visited[i] = visited[start] + 1
                dQ.append(i)      
            
n = int(input()) #전체 사람의 수 
a, b = map(int, input().split()) #촌수를 계산해야 하는 서로 다른 두 사람의 번호 
m = int(input()) #관계의 수 
board = [[] for _ in range(n+1)]
visited = [-1 for _ in range(n+1)]
for _ in range(m) :
    x, y = map(int, input().split())
    board[x].append(y)
    board[y].append(x)
    
visited[a] = 0
bfs(a)
print(visited[b]) 
