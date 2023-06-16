function solution(score) {
    var answer = [];
    var avg = [];
    for(let i =0; i< score.length; i++) {
        const sum = score[i].reduce((a,b) => a+b);
        avg.push(sum/2); 
    }

    let tmp = avg.slice().sort(function(a,b){return b-a});
    console.log(tmp);
    for(let i =0; i < avg.length; i++) {
        answer.push(tmp.indexOf(avg[i])+1);
    }
    
    return answer;
}