function solution(age) {
    var answer = [];
    const alist = ['a','b','c','d','e','f','g','h','i','j'];
    const tmp = age.toString().split('');
    
    for(let i =0; i < tmp.length; i++) {
        answer.push(alist[Number(tmp[i])]);
    }
    
    return answer.join('');
}