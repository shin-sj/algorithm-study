function solution(maps) {
    const xEnd = maps.length;
    const yEnd= maps[0].length;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    
    const bfs = () => {
        const queue = [[0, 0]];
        while (queue.length) {
            const [x, y] = queue.shift();
            for(let i = 0; i < 4; i++)
            {
                const xx = x + dx[i];
                const yy = y + dy[i];
                if (xx >= 0 && xx < xEnd && yy >= 0 && yy < yEnd && maps[xx][yy] == 1) {
                    maps[xx][yy] = maps[x][y] + 1;
                    queue.push([xx, yy]);
                }
            }
        }
    }

    bfs();
    
    if(maps[xEnd-1][yEnd-1] != 1) return maps[xEnd-1][yEnd-1];
    else return -1;
}