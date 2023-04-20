from itertools import permutations
def ch(n): 
    if n < 2 :
        return False
    for i in range(2, int(n ** 0.5) + 1) :
        if n % i == 0:
            return False
    return True

def solution(numbers):
    tmp = []
    for i in range(1, len(numbers) + 1 ): 
        tmp.extend(permutations(numbers, i))
    real = [int(''.join(t)) for t in tmp]
    print(real)
    answer = [] 
    for r in real :
        if ch(r) :
            answer.append(r)
    print(len(set(answer)))
    return len(set(answer))