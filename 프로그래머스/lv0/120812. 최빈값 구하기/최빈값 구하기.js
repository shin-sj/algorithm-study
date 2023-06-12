function solution(array) {
    let counting = new Map();
    let countArray = [];
    let max = 0;
    for(let i of array) {
        if(!counting.has(i)) counting.set(i, 0);
        if(counting.has(i)) counting.set(i, counting.get(i)+1);
        while(counting.get(i) > max) max++;
    }

    for (let [k, v] of counting) {
        if(v === max) countArray.push(k)
    }
    
    return countArray.length === 1 ? countArray[0] : -1;
}