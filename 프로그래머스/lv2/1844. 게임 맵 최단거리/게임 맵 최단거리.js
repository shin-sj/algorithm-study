function solution(maps) {
    const answer = 0;
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    const xend = maps.length;
    const yend = maps[0].length;
    
    const bfs = () => {
        const queue = [[0, 0]];
        while (queue.length) {
            const [x, y] = queue.shift();
            for(let i = 0; i < 4; i++) {
                const xx = x + dx[i];
                const yy = y + dy[i];
                
                if(xx>=0 && xx<xend && yy >=0 && y<yend) {
                    if(maps[xx][yy]==1) {
                        maps[xx][yy] = maps[x][y] + 1;
                        queue.push([xx, yy]);
                    }
                }
                
                
                
            }
        }
    
    
    }
    bfs();
    if(maps[xend-1][yend-1] != 1) 
        return maps[xend-1][yend-1];
    else return -1;
}