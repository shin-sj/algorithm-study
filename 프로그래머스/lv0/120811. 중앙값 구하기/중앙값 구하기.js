function solution(array) {
    var answer = 0;
    array.sort(function(a, b) {
        return a-b;
    })
    answer = array[Math.floor(array.length / 2)];
    return answer;
}