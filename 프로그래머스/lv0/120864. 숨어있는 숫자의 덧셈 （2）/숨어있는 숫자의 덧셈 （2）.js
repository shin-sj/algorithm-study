function solution(my_string) {
    var answer = 0;

    for(let i=0; i<my_string.length; i++) {
        let tmp = 0;
        while(!isNaN(my_string[i])) {
            tmp += my_string[i];
            i+=1;
        }
        answer += Number(tmp);
    }

    return answer;
}