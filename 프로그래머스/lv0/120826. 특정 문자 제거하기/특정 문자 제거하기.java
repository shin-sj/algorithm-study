class Solution {
    public String solution(String my_string, String letter) {
        StringBuilder answer = new StringBuilder();

        for (char c : my_string.toCharArray()) {
            String currentLetter = String.valueOf(c);
            if (!currentLetter.equals(letter)) {
                answer.append(currentLetter);
            }
        }

        return answer.toString();
    }
}