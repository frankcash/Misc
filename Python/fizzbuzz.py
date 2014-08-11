for x in range(1,101):
    s = ""
    if x % 3 == 0:
        s += "fizz"
    if x % 5 == 0:
        s += "buzz"
    if s=="":
        s = x
    print s

