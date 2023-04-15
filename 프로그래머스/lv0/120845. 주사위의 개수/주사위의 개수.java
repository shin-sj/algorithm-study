class Solution {
    public int solution(int[] box, int n) {
        int answer = 1;
        for(int i = 0; i < 3; i++) {
            // System.out.println(box[i] /n);
            answer *= box[i] / n;
        }
        
        
        return answer;
    }
}