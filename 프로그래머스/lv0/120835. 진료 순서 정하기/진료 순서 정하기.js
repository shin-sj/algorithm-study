function solution(emergency) {
    var answer = [];
    var tmp = emergency.slice().sort(function(a,b){return b-a});
    console.log(tmp);
    
    for(let i = 0; i < emergency.length; i++) {
        answer.push(tmp.indexOf(emergency[i]) + 1);
    }
    
    return answer;
}