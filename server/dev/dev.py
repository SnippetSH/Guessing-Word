import json
from Modules import makeKey

def newKey():
    key = makeKey()

    with open('keys.json', "r") as f:
        keys = json.load(f)

    keys.append(key)

    with open('keys.json', "w") as f:
        json.dump(keys, f)

def rankModify():
    with open("rank.json", "r", encoding='utf-8') as f:
        rank = json.load(f)

    convert = [{item[0]: item[1]} for item in rank]

    with open("rank.json", "w", encoding='utf-8') as f:
        json.dump(convert, f, ensure_ascii=False)


if __name__ == "__main__":
    rankModify()