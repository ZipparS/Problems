import string
import re

def is_pangram(s):
    
    return bool(re.search('abcdefghijklmnopqrstuvwxyz', ''.join(sorted(str(set(s.lower()))))))