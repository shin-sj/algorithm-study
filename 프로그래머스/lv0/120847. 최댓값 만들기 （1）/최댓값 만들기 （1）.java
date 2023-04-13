import java.util.*;
class Solution {
    public int solution(int[] numbers) {
        int answer = 0;
        Arrays.sort(numbers);
        for(int a : numbers) {
            System.out.println(a);
        }
        int idx = numbers.length;
        answer = numbers[idx-1] * numbers[idx-2];
        
        return answer;
    }
}