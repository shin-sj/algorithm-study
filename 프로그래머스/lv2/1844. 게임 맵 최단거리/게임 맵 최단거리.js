function solution(maps) {
    var answer = 0;
    const xend = maps.length;
    const yend = maps[0].length;
    const dx=[0,0,1,-1];
    const dy=[1,-1,0,0];
    const visited = Array.from(Array(xend), () => Array(yend).fill(0));

    const bfs=()=> {
        const queue = [[0, 0]];
        visited[0][0] = 1;
        
        while(queue.length) {
            const [x,y] = queue.shift();
            for(let i=0; i<4; i++) {
                const xx = x + dx[i];
                const yy = y + dy[i];
                
                if(xx>=0 && xx<xend && yy>=0 && yy<yend) {
                    if(visited[xx][yy] == 0 && maps[xx][yy] == 1) {
                        visited[xx][yy] = visited[x][y]+1;
                        queue.push([xx, yy]);
                    }
                }
                
            }
            
        }
        
        
    }
    bfs();
    if(visited[xend-1][yend-1] != 0) return visited[xend-1][yend-1];
    else return -1;
    
}