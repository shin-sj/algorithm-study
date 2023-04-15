import java.util.*;
class Solution {
    public int solution(int n) {
        int answer = 0;
        String nn = Integer.toString(n);
        
        String[] array = nn.split("");
        for(String a : array) {
            answer += Integer.parseInt(a);
        }
        
        return answer;
    }
}