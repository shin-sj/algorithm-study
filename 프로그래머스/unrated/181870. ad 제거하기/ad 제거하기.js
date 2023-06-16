function solution(strArr) {
    var answer = [];
    answer = strArr.filter(e => !e.includes('ad'));
    
    return answer;
}