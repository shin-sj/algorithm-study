import java.util.ArrayDeque;
import java.util.Queue;

class Solution {
    private int[] dx = {0, 0, 1, -1};
    private int[] dy = {1, -1, 0, 0};

    public void bfs(int[][] maps) {
        int xEnd = maps.length;
        int yEnd = maps[0].length;
        Queue<int[]> queue = new ArrayDeque<>();
        queue.offer(new int[]{0, 0});

        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int x = current[0];
            int y = current[1];

            for (int i = 0; i < 4; i++) {
                int xx = x + dx[i];
                int yy = y + dy[i];

                if (xx >= 0 && xx < xEnd && yy >= 0 && yy < yEnd) {
                    if (maps[xx][yy] == 1) {
                        maps[xx][yy] = maps[x][y] + 1;
                        queue.offer(new int[]{xx, yy});
                    }
                }
            }
        }
    }

    public int solution(int[][] maps) {
        int xEnd = maps.length;
        int yEnd = maps[0].length;
        bfs(maps);
        return (maps[xEnd - 1][yEnd - 1] != 1) ? maps[xEnd - 1][yEnd - 1] : -1;
    }
}
