import sys
import os

def path_add():
    # 현재 파일이 위치한 디렉토리를 기준으로 경로를 설정
    base_path = os.path.dirname(os.path.abspath(__file__))
    
    sys.path.append(os.path.abspath(os.path.join(base_path, '../Modules')))
    sys.path.append(os.path.abspath(os.path.join(base_path, '../path_add')))
    sys.path.append(os.path.abspath(os.path.join(base_path, '../reqOPENAI')))
    
