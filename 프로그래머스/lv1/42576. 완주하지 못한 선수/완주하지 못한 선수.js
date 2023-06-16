function solution(participant, completion) {
    var answer = '';
    
    const par_map = new Map();
    const com_map = new Map();
    
    for(let i=0; i<participant.length; i++) {
        if(!par_map.has(participant[i])) par_map.set(participant[i], 1);
        else par_map.set(participant[i], par_map.get(participant[i])+1 );
    }
    for(let i=0; i<completion.length; i++) {
        par_map.set(completion[i], par_map.get(completion[i])-1);
    }
    
    for(let [k, v] of par_map) {
        if(v==1) return k;
    }
    
    
}