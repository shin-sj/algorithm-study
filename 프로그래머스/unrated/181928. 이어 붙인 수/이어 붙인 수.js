function solution(num_list) {
    var answer = 0;
    var a = [];
    var b = [];
    
    for(let i=0; i<num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
            a.push(num_list[i]);
        }
        else b.push(num_list[i]);
    }

    return Number(a.join(''))+ Number(b.join(''));
}

