function solution(nums) {
    var answer = 0;
    let map = new Map();
    for(let i of nums) {
        if(!map.has(i)) map.set(i, 0);
        if(map.has(i)) map.set(i, map.get(i) + 1);
    }
    if(map.size < Math.floor(nums.length / 2))
        return map.size;
    else return Math.floor(nums.length / 2)
        
}