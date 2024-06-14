'use client'
import { useState } from "react";
export default function Form(){
    let [previewImg, setPreviewImg] = useState(0);
    function uploadFile(e) {
        let fileArr = e.target.files;
        let fileRead = new FileReader();
        fileRead.onload = function(){
            setPreviewImg(fileRead.result);
        };
        console.log(fileRead)
        fileRead.readAsDataURL(fileArr[0]);
    };
    return(
        <>
            <h1 className="text-sejong-gray text-5xl font-bold text-center my-10">관리자 페이지</h1>
            <form action='http://127.0.0.1:5000/upload' method="post" encType = "multipart/form-data" className="grid grid-cols-2">
                <input type="hidden" value="admin" name="admin"></input>
                <div className="justify-self-center self-center">
                    <label for='photo'><img src={previewImg==0?"/img/upload.png":previewImg} className="rounded-lg w-[300px]"></img></label>
                    <input onChange={uploadFile} id='photo' name='photo' type="file" accept="image/*" className="hidden"></input>
                </div>
                <div className="grid grid-cols-1 w-[400px]">
                    <div>
                        <label for="kor" class=" text-sm font-medium text-gray-700">이름</label>
                        <input required type="text" id="kor" name="kor" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label for="eng" class=" text-sm font-medium text-gray-700">영문명</label>
                        <input required type="text" id="eng" name="eng" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label for="position" class=" text-sm font-medium text-gray-700">직위</label>
                        <input required type="text" id="position" name="position" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label for="email" class=" text-sm font-medium text-gray-700">이메일</label>
                        <input required type="text" id="email" name="email" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label for="major" class=" text-sm font-medium text-gray-700">전공</label>
                        <input required type="text" id="major" name="major" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label for="doctoral" class=" text-sm font-medium text-gray-700">학력</label>
                        <input required type="text" id="doctoral" name="doctoral" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label for="website" class=" text-sm font-medium text-gray-700">홈페이지</label>
                        <input required type="text" id="website" name="website" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label for="location" class=" text-sm font-medium text-gray-700">연구실</label>
                        <input required type="text" id="location" name="location" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div>
                        <label for="phone" class=" text-sm font-medium text-gray-700">연락처</label>
                        <input required type="text" id="phone" name="phone" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                </div>
                <button type="submit" class="mt-5 my-10 justify-self-center col-span-full w-[600px] py-2 px-4 border border-black rounded-md shadow-sm text-sm font-medium text-black bg-white hover:border-white hover:text-white hover:bg-sejong-crimson focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">제출</button>
            </form>
            <form action='http://127.0.0.1:5000/delete' method="post" className="grid">
                <input type="hidden" value="admin" name="admin"></input>
                <div className="text-sejong-crimson text-3xl font-bold text-center">삭제</div>
                <div className="w-[400px] justify-self-center mb-5">
                    <label for="name" class=" text-sm font-medium text-gray-700">교수님 성함</label>
                    <input required type="text" id="name" name="name" class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <button type="submit" class="mb-10 justify-self-center col-span-full w-[400px] py-2 px-4 border border-black rounded-md shadow-sm text-sm font-medium text-black bg-indigo hover:border-white hover:text-white hover:bg-sejong-crimson focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">제출</button>
            </form>
        </>
    );
}