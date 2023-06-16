function solution(before, after) {
    var answer = 0;
    const a = [...before];
    const b = [...after];
    a.sort();
    b.sort();
    if(a.join('')==b.join('')) 
        return 1;
    else return 0;
}