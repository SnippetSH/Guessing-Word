import random as rd
import string
import json
import os

def makeKey():
    rd.seed(a = None)
    alphabet = list(string.ascii_lowercase)
    number = [i for i in range(1, 101)]
    length = len(alphabet) + len(number)

    key = ''
    for i in range(20):
        r = rd.randrange(1, length + 1)
        key += alphabet[r] if r < len(alphabet) else str(number[r - len(alphabet)])

    return key

def checkKey(key):
    with open(os.path.join('dev', 'keys.json'), "r") as f:
        keys = json.load(f)

    return key in keys 

def makeRandom(l):
    rd.seed(a = None)
    return rd.randrange(0, l)