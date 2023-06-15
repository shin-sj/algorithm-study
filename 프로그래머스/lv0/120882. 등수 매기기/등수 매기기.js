function solution(score) {
    var answer = [];
    const avg = [];
    
    for(let i=0; i<score.length; i++) {
        const tmp = score[i].reduce((a,b)=> a+b);
        avg.push(tmp/score[i].length);
    }
    console.log(avg);
    
    // 2. avg를 내림차순으로 정렬한 배열 sort를 선언한다.
    let sorted = avg.slice().sort((a,b)=>b-a);
  	
  	// 3. avg의 요소와 동일한 sorted 배열의 index 값에 1을 더한다.
    return avg.map(v => sorted.indexOf(v) + 1);
    
    
    return answer;
}