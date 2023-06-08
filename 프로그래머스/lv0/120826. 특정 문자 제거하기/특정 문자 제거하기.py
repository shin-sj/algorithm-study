def solution(my_string, letter):
    answer = ''
    
    for a in my_string :
        if a != letter :
            answer += a

    return answer