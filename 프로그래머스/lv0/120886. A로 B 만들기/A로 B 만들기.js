function solution(before, after) {
    var answer = 0;
    const map = new Map();
    for(let b of before) {
        if(!map.has(b)) map.set(b, 1);
        else map.set(b, map.get(b) + 1);
    } 
    for(let a of after) {
        if(map.get(a) > 0) map.set(a, map.get(a)-1); 
        else return 0;
    }
    for(let [k, v] of map) {
        if(v !=0 ) return 0;
    }
    
    
    return 1;
}