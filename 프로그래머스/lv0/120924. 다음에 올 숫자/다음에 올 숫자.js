function solution(common) {
    var answer = 0;
    
    if(common[1]-common[0] === common[2]-common[1]) {
        return common.pop() + (common[1]-common[0]);
    }
    else {
        return common.pop() * (common[1]/common[0]);
    }
    return answer;
}