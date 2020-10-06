def nextGreaterElements(A):
    stack, res = [], [-1] * len(A)
    print("res",res)
    print(list(range(len(A))))
    for i in list(range(len(A))) * 2:
        while stack and (A[stack[-1]] < A[i]):
            print(A[stack[-1]])
            print(A[i])
            res[stack.pop()] = A[i]
        stack.append(i)
    
    return res
    
# 1 1 1
# -1 - 1 -1



A = list(map(int, input("Enter array elements: ").strip().split()))
print(nextGreaterElements(A))