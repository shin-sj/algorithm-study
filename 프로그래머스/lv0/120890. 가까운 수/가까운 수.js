function solution(array, n) {
    var tmp = [];

    let answer;
    for(let i =0; i < array.length; i++) {
        tmp.push(Math.abs(array[i] - n));
    }
    let min = Math.min(...tmp);
    const check = [];
    for(let i =0; i < tmp.length; i++) {
        if(tmp[i] === min) check.push(array[i]);
    }
    return Math.min(...check);
}