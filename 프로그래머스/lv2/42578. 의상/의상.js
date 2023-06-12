function solution(clothes) {
    var answer = 1;
    let amap = new Map();
    
    for(let c of clothes) {
        if(!amap.has(c[1])) amap.set(c[1], 0);
        if(amap.has(c[1])) amap.set(c[1], amap.get(c[1]) + 1);
    }
    for(let [k, v] of amap) {
        answer *= (v+1);
    }
    
    return answer-1;
}