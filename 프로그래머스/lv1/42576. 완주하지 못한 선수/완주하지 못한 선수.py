from collections import Counter
def solution(participant, completion):
    answer = ''
    apart = Counter(participant)
    acom = Counter(completion)

    #apart for문 돌면서, 같은거 - 하기
    for key, value in apart.items() :
        if apart[key] != acom[key] :
            answer = key
    return answer
        