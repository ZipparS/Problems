from math import sqrt

def is_square(n):   
    if(n < 0): return False
        
    return (int(sqrt(n)) * int(sqrt(n))) == n