function solution(s1, s2) {
    var answer = 0;
    for(let i =0; i < s2.length; i++) {
        for(let j =0; j < s1.length; j++) {
            if(s1[j] === s2[i]) answer += 1;
        }
    }
    
    return answer;
}