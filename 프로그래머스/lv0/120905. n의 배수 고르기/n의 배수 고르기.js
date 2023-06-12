function solution(n, numlist) {
    var answer = numlist.filter((el) => el % n === 0);    
    
    return answer;
}