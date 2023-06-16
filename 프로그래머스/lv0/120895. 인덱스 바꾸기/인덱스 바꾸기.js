function solution(my_string, num1, num2) {
    var answer = '';
    const my_list = my_string.split('') ;
    console.log(my_list);
    const chk = my_list.slice();
    chk[num1] = my_list[num2];
    chk[num2] = my_list[num1];
    answer = chk.join('');
    
    return answer;
}