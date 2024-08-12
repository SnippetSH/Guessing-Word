length_vector = 6351

import json
import os
from Modules import makeRandom, cos_sim, normalize_l2

def chooseWord():
    r = makeRandom(length_vector)
    with open(os.path.join("word-dataset", "vectors_with_Label.json"), "r", encoding='utf-8') as f:
        words = json.load(f)

    items = list(words.items())

    with open(os.path.join("dev", "word.json"), "w", encoding='utf-8') as f:
        json.dump(items[r], f, ensure_ascii=False)

def makeWordRank():
    with open(os.path.join("word-dataset", "vectors_with_Label.json"), "r", encoding='utf-8') as f:
        words = json.load(f)
    
    with open(os.path.join("dev", "word.json"), "r", encoding='utf-8') as f:
        current = json.load(f)

    cur_vector = current[1]

    distance = {}
    for key, value in words.items():
        dist = cos_sim(value, cur_vector).tolist()

        distance[key] = dist
    
    rank = sorted(distance.items(), key=lambda item: item[1], reverse=True)

    with open(os.path.join("dev", "rank.json"), "w", encoding='utf-8') as f:
        json.dump(rank, f, ensure_ascii=False)

def compareRank(vector):
    v = normalize_l2(vector).tolist()

    with open(os.path.join("dev", "word.json"), "r", encoding='utf-8') as f:
        current = json.load(f)

    cur_vector = current[1]

    dist = cos_sim(v, cur_vector)

    return dist