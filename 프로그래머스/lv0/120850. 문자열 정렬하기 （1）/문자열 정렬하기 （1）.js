function solution(my_string) {
    var answer = [];
    for(let i=0; i<my_string.length; i++) {
        if(!isNaN(my_string[i]))
            answer.push(Number(my_string[i]))
    }
    answer.sort(function(a,b){return a-b});
    console.log(answer);
    return answer;
}