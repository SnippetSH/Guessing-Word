import json
from Modules import makeKey

key = makeKey()

with open('keys.json', "r") as f:
    keys = json.load(f)

keys.append(key)

with open('keys.json', "w") as f:
    json.dump(keys, f)