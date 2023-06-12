function solution(array, commands) {
    var answer = [];
    
    for(let c of commands) {
        let alist = array.slice(c[0]-1, c[1]);
        alist.sort(function (a,b) {return a-b;});
        answer.push(alist[c[2]-1]);
    }
    console.log(answer);
    return answer;
}