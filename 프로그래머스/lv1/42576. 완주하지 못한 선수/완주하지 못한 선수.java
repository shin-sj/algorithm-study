import java.util.HashMap;
import java.util.Map;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        Map<String, Integer> apart = new HashMap<>();
        Map<String, Integer> acom = new HashMap<>();

        for (String p : participant) {
            apart.put(p, apart.getOrDefault(p, 0) + 1);
        }

        for (String c : completion) {
            acom.put(c, acom.getOrDefault(c, 0) + 1);
        }

        for (String key : apart.keySet()) {
            if (!apart.get(key).equals(acom.get(key))) {
                answer = key;
                break;
            }
        }

        return answer;
    }
}
