import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client['faculty']
collection = db['detail']

data =[
    {
        "kor": "전창재",
        "eng": "Jeon Chang-jae",
        "email": "cchun@sejong.ac.kr",
        "position": "조교수/인공지능학과",
        "major": "전기및전자공학",
        "doctoral": "KAIST 전자및전자공학",
        "degree": "공학박사(KAIST)",
        "lab": {
            "location": "대양AI센터 505",
            "phone": "02-3408-3237",
            "site": "https://sites.google.com/view/aiotl"
        }
    },
    {
        "kor": "심태용",
        "eng": "Shim Tae-yong",
        "email": "tysim@sejong.ac.kr",
        "position": "조교수/인공지능학과",
        "major": "바이오메카트로닉스",
        "doctoral": "성균관대학교 바이오메카트로닉스",
        "degree": "공학박사(성균관대학교)",
        "lab": {
            "location": "대양AI센터 518",
            "phone": "02-3408-1866",
            "site": "https://sites.google.com/view/bio-ai"
        }
    },
    {
        "kor": "이수진",
        "eng": "Lee Su-jin",
        "email": "genegraphy@sejong.ac.kr",
        "position": "조교수/인공지능학과",
        "major": "컴퓨터비전, HCI, 인공지능응용(예술, 엔터테인먼트)",
        "doctoral": "서강대학교 미디어공학",
        "degree": "공학박사(서강대학교)",
        "lab": {
            "location": "대양AI센터 425",
            "phone": "02-3408-1867",
            "site": "https://home.sejong.ac.kr/~genegraphy/"
        }
    },
    {
        "kor": "구영현",
        "eng": "Koo Young-hyun",
        "email": "yhgu@sejong.ac.kr",
        "position": "조교수/인공지능학과",
        "major": "소프트웨어공학",
        "doctoral": "세종대학교 컴퓨터공학",
        "degree": "공학박사(세종대학교)",
        "lab": {
            "location": "대양AI센터 801",
            "phone": "02-3408-3253"
        }
    },
    {
        "kor": "김정현",
        "eng": "Kim Jung-hyun",
        "email": "j.kim@sejong.ac.kr",
        "position": "조교수/인공지능학과",
        "major": "전기전자공학",
        "doctoral": "연세대학교 전기전자공학",
        "degree": "공학박사(연세대학교)",
        "lab": {
            "location": "대양AI센터 507호",
            "phone": "02-3408-3238",
            "site": "https://sites.google.com/view/lab-dia"
        }
    },
    {
        "kor": "신승협",
        "eng": "Shin Seung-hyeop",
        "email": "shshin@sejong.ac.kr",
        "position": "조교수/인공지능학과",
        "major": "기계항공공학/기계공학",
        "doctoral": "서울대학교 기계공학",
        "degree": "공학박사(서울대학교)",
        "lab": {
            "location": "대양AI센터 310A호",
            "phone": "02-3408-3252",
            "site": "https://sites.google.com/view/sju-aisl/home?authuser=0"
        }
    },
    {
        "kor": "이동훈",
        "eng": "Lee Dong-hoon",
        "email": "donghoun.lee@sejong.ac.kr",
        "position": "조교수/인공지능학과",
        "major": "교통공학",
        "doctoral": "카이스트 건설및환경공학과 (교통공학)",
        "degree": "공학박사(카이스트)",
        "lab": {
            "location": "다산관 411",
            "phone": "02-3408-3738"
        }
    },
    {
        "kor": "모하메드 알-마스니",
        "eng": "Mohammed Al-Masni",
        "email": "m.almasani@sejong.ac.kr",
        "position": "조교수/인공지능학과",
        "major": "의공학",
        "doctoral": "경희대학교 의공학",
        "degree": "공학박사(경희대학교)",
        "lab": {
            "location": "대양AI센터 454",
            "phone": "02-6935-2643"
        }
    },
    {
        "kor": "무함마드 샤프루딘",
        "eng": "Muhhamad Syafruddin",
        "email": "udin@sju.ac.kr",
        "position": "조교수/인공지능학과",
        "major": "정보공학(소프트웨어공학)/산업시스템공학",
        "doctoral": "동국대학교 산업시스템공학",
        "degree": "공학박사(동국대학교)",
        "lab": {
            "location": "대양AI센터 502",
            "phone": "02-3408-1879"
        }
    },
    {
        "kor": "김장겸",
        "eng": "Kim Jang-kyum",
        "email": "jk.kim@sejong.ac.kr",
        "position": "조교수/인공지능데이터사이언스학과",
        "doctoral": "KAIST 전기및전자공학",
        "degree": "공학박사(KAIST)",
        "lab": {
            "location": "센413A",
            "phone": "02-3408-3233",
            "site": "https://www.teedlab.com/"
        }
    }
]
collection.drop()
collection.insert_many(data)
print(collection.find_one({'kor':"rnrwlgh"}))
'''
for i in collection.find({'kor':"국지호"}):
    print(i)'''