function solution(cipher, code) {
    var answer = '';
    const tmp = [];
    for(let i = code; i <= cipher.length; i++) {
        if(i % code ==0) {
            tmp.push(cipher[i-1]);
        }
    }
    answer = tmp.join('');
    return answer;
}