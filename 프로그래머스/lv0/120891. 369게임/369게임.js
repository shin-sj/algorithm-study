function solution(order) {
    var answer = 0;
    const array = order.toString().split('');
    const tmp = array.filter(e => e ==3 ||e==6 ||e==9);
    
    return tmp.length;
}