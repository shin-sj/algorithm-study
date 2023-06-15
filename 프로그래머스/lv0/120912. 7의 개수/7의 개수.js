function solution(array) {
    console.log(array.join("").split(""));
    return array.join("").split("").filter(a => a === '7').length;
}