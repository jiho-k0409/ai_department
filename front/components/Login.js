'use client'
import { useState } from "react";
import {redirect} from 'next/navigation'
import axios from "axios";
import AdminPannel from "/components/AdminPannel"
export default function Login(){
    let [login,setLogin] = useState(0)
    let [id,setId] = useState('')
    let [pw,setPw] = useState('')
    const getId = (e)=>{
        setId(e.target.value)
    }
    const getPw = (e)=>{
        setPw(e.target.value)
    }
    function handleLogin(id, pw) {
        if (id === '' || pw === '') {
            alert("아이디와 비밀번호를 모두 입력해주세요.");
            return;
        }
        axios.post('http://127.0.0.1:5000/login',{id:id,pw:pw},
        { headers:{"Content-Type": "application/json"}}).then((response)=>{setLogin(response.status)})
    }
    return (
        <>
            {login==0?<div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="grid gap-4">
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">아이디</label>
            <input
                type="text"
                id="id"
                name="id"
                onChange={getId}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
            />
            <label htmlFor="pw" className="block text-sm font-medium text-gray-700">비밀번호</label>
            <input
                type="password"
                id="pw"
                name="pw"
                onChange={getPw}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-600 focus:border-red-600 sm:text-sm"
            />
            <button
                onClick={() => handleLogin(id,pw)}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sejong-crimson hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
                로그인
            </button>
        </div>
    </div>
</div>

:null}
            {login==202?redirect('/'):null}
            {login!=0?<AdminPannel/>:null}
        </>
    );
}