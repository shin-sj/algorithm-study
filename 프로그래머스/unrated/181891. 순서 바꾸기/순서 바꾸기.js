function solution(num_list, n) {
    var answer = [];
    answer = num_list.slice(n, num_list.length);
    console.log(answer);
    console.log(num_list.slice(0,n));
    return [...answer, ...num_list.slice(0,n)];
}