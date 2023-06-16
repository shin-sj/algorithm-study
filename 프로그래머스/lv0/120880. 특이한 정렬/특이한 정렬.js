function solution(numlist, n) {
    var answer = [];
    const tmp = []
    
    for(let i =0; i<numlist.length; i++) {
        tmp.push([Math.abs(numlist[i] - n), numlist[i]]);
    }
    tmp.sort(function(a, b) {return b[1]-a[1]});
    tmp.sort(function(a, b) {return a[0]-b[0]});
    for(let i =0; i<tmp.length; i++) {
        answer.push(tmp[i][1]);
    }
    
    return answer;
}