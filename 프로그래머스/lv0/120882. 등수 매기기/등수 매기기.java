import java.util.*;
class Solution {
    public int[] solution(int[][] score) {
        int[] answer = new int[score.length];
        List<Integer> avg2 = new ArrayList<>(); 
        
        for (int i = 0; i < score.length; i++) {
            avg2.add(score[i][0] + score[i][1]);
        }
        avg2.sort(Collections.reverseOrder());
        for(int i = 0; i < score.length; i++) {
            answer[i] = avg2.indexOf(score[i][0] + score[i][1]) + 1;
        }
        return answer;
    }
}