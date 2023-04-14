import java.util.*;

class Solution {
    public String solution(String my_string) {
        String answer = "";
        char[] arr = my_string.toCharArray();
        for(int i = my_string.length()-1; i >= 0; i--) {
            answer += arr[i];
        }
        System.out.println(answer);
        
        return answer;
    }
}