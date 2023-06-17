function solution(array) {
    var answer = 0;
    return array.join('').split('').filter(e=>e==='7').length;
}