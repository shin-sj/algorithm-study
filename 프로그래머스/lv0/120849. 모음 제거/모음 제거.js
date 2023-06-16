function solution(my_string) {
    
    return my_string.replace(/['a','e','i','o','u']/g,'')
    
}

// function solution(my_string) {
//     const str = 'aeiou'
//     let newString = my_string.split('').filter((el)=>(!str.includes(el))).join('')
//     return newString
// }