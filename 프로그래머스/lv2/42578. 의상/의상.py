def solution(clothes):
    answer = 1
    adict = dict()
    for i in range(len(clothes)) :
        if clothes[i][1] in adict:
            adict[clothes[i][1]] += 1
        else :
            adict[clothes[i][1]] = 1
    
    print(adict)
    for value in adict.values() :
        answer *= (value+1)
    
    return answer-1