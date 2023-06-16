function solution(s) {
    var answer = 0;
    const tmp = [];
    const s_list = s.split(" ");
    console.log(s_list);
    for(let i =0; i < s_list.length; i++) {
        tmp.push(s_list[i]);
        if(s_list[i] == 'Z') {
            tmp.pop();
            tmp.pop();
        }
    }
    for(let i =0; i< tmp.length; i++) {
        answer += Number(tmp[i]);
    }
    return answer;
}