from flask import Flask, g, request, jsonify, send_from_directory
from Modules import checkKey, chooseWord, makeWordRank

app = Flask(__name__, static_folder='dist', static_url_path='')
host_addr = "0.0.0.0"
host_port = 5000

@app.route('/')
def home():
    return "hi"

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

if __name__ == '__main__':
    app.run(debug=True,
            host=host_addr,
            port=host_port)