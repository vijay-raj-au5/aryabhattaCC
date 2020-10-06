def isValid(s):
    stack = []
    dict = {"]":"[","}":"{",")":"("}  

    for char in s:
        if char in dict.values():
            stack.append(char)
        elif char in dict.keys():
            print(dict[char])
            print(stack)

            if stack == [] or dict[char] != stack.pop():
                return False
        else:
            return False
    return stack == []
    

s = input("")
print(isValid(s))

