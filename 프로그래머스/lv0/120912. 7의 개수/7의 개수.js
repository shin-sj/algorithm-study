function solution(array) {
    var answer = 0;
    const tmp = array.join('').split('');
    
    answer = tmp.filter(e=>e ==7).length;
    return answer;
}