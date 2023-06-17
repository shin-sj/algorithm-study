function solution(before, after) {
    var answer = 0;
    const b = before.split('').sort();
    const a = after.split('').sort();
    
    if(a.join('') === b.join('')) return 1;
    else return 0;
}