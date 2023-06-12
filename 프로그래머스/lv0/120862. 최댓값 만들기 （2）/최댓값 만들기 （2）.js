function solution(numbers) {
    var answer = 0;
    numbers.sort(function (a, b) {
        return a - b;
    });
    console.log(numbers); 
    const a = numbers[0] * numbers[1];
    const b = numbers[numbers.length-1] * numbers[numbers.length-2];
    console.log(a, b);
    if(a >= b) return a;
    else return b;
    
}