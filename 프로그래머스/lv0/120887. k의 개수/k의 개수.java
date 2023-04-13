class Solution {
    public int solution(int i, int j, int k) {
        int answer = 0;
        String chk = String.valueOf(k);
        
        for(int p = i; p <= j; p++) {
            String tmp = String.valueOf(p);
            
            if(tmp.contains(chk)) {
                String[] array = tmp.split("");
                for(String a : array) {
                    if (a.equals(chk)) 
                        answer += 1;
                }
            }
        }
        
        return answer;
    }
}