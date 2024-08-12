from path_add import path_add

path_add()

from flask import Flask, g, request, jsonify, send_from_directory
from Modules import checkKey, chooseWord, makeWordRank, compareRank
from reqOPENAI import getVector
import json

app = Flask(__name__, static_folder='dist', static_url_path='')
host_addr = "0.0.0.0"
host_port = 5000

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/dev-rd/<string:key>', methods=['GET', 'POST'])
def dev_1(key):
    if(checkKey(key)):
        chooseWord()
        return "True"
    else:
        return "False"
    
@app.route('/rank', methods=['GET', 'POST'])
def rank():
    makeWordRank()

    return "True"

@app.route('/get-rank', methods=['GET'])
def getRank():
    file_path = "./dev/rank.json"
    
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    
    return jsonify(data)

@app.route('/new-word', methods=['GET'])
def getAPI():
    text = request.args.get('word')
    v = getVector(text)
    print(v)
    dist = compareRank(v)

    print(dist)
    return {"value": dist}



@app.errorhandler(404)
def page_not_found(e):
    # 404 페이지를 반환하거나 사용자 정의 404 페이지로 리디렉션
    return send_from_directory(app.static_folder, 'index.html'), 404

if __name__ == '__main__':
    app.run(debug=True,
            host=host_addr,
            port=host_port)