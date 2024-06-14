from flask import Flask,request,jsonify,make_response
import json
from flask_cors import CORS
from pymongo import MongoClient
from bson import json_util
import os
client = MongoClient("mongodb://localhost:27017/")
db=client['faculty']
collection = db['detail']

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

CORS(app)

def create_faculty_document(kor, eng, email, position,major, doctoral, lab_location, lab_phone,homepage):
    faculty_document = {
        "kor": kor,
        "eng": eng,
        "email": email,
        "major":major,
        "position": position,
        "doctoral": doctoral,
        "lab": {
            "location": lab_location,
            "phone": lab_phone,
            "site": homepage
        }
    }

    return faculty_document


@app.route('/faculty')
def faculty():
    data = collection.find()
    # MongoDB cursor를 리스트로 변환
    data_list = list(data)
    # json_util.dumps를 사용하여 데이터를 JSON으로 변환
    json_data = json_util.dumps(data_list, ensure_ascii=False)
    return jsonify(json.loads(json_data))

@app.route('/upload',methods=['POST'])
def upload():
    upload=request.form
    before=upload['before']
    kor = upload['kor']
    eng=upload['eng']
    position = upload['position']
    email = upload['email']
    major = upload['major']
    doctoral = upload['doctoral']
    homepage = upload['website']
    phone = upload['phone']
    location = upload['location']
    print(kor,eng,email,position,major,doctoral,location,phone,homepage)
    data = create_faculty_document(kor,eng,email,position,major,doctoral,location,phone,homepage)
    if before!='':
        os.rename(f'./front/public/img/faculty/{before}.png',f'./front/public/img/faculty/{kor}.png')
    if collection.find_one({"kor":before})==None:
        collection.insert_one(data)
        print(before)
    else :
        collection.update_one({"kor":before},{"$set": data})
        print(before)
    if 'photo' in request.files:
        image = request.files['photo']
        image.save(os.path.join('./front/public/img/faculty',f"{kor}.png"))
    
    res = make_response()
    return res

    

@app.route('/delete',methods=['POST'])
def delete():
    data=request.get_json()
    kor = data['name']
    if collection.find_one({'kor':kor}):
        collection.delete_one({'kor':kor})
    res = make_response()
    return res


@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
    
    # 아이디와 비밀번호 추출
        user_id = data['id']
        user_pw = data['pw']
        id = 'admin'
        pw = '12345'
        res = make_response()
        if user_id == id and user_pw == pw:
            res.status_code = 201
            return res
        else:
            res.status_code = 202
        return res
    except:
        print(request)
        r = make_response()
        r.status_code = 400
        return r
        
    

if __name__=='__main__':
    app.run()