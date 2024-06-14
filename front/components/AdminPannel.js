'use client'
import { useState,useEffect } from 'react';
import FacultyList from '/components/FacultyList';
import FacultyForm from '/components/FacultyForm';
import axios from "axios";

export default function AdminPage(){
  let [faculty, setFaculty] = useState([]);
  let [current, setCurrent] = useState('');

  function onEdit(e){
    let i=0;
    for(i=0;i<faculty.length;i++){
      if(e.target.value==faculty[i].kor)break;
    }
    setCurrent(faculty[i]);
  }
  
  function onAdd(){
    setCurrent({
      "kor": "",
        "eng": "",
        "email": "",
        "position": "",
        "major": "",
        "doctoral": "",
        "degree": "",
        "lab": {
            "location": "",
            "phone": "",
            "site": ""
        }
    }
    );
  }

  async function onDelete(e){
    await axios.post('http://127.0.0.1:5000/delete',{name:e.target.value},{ 
      headers:{
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": `http://localhost:5000`,
        'Access-Control-Allow-Credentials':"true",
      }
    })
    fetchData()
  }
  function onCancel(){
    setCurrent('');
  }
  async function onSave(data){
    await axios.post('http://127.0.0.1:5000/upload',data,{
    headers:{
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": `http://localhost:5000`,
      'Access-Control-Allow-Credentials':"true",
    }})
    fetchData();
    setCurrent('');
  }
  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/faculty',{
        headers : {
          "Access-Control-Allow-Origin": `http://localhost:5000`,
          'Access-Control-Allow-Credentials':"true",
        }
      });
      setFaculty(response.data);
    } catch (error) {
      console.error('Error fetching faculty data', error);
    }
  };
  useEffect(() => {
    

    fetchData();
  },[]);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Faculty Admin Page</h1>
      {current!=''?<FacultyForm currentMember={current} onCancel={onCancel} onSave={onSave}/>:null}
      {current==''?<FacultyList faculty={faculty} onEdit={onEdit} onDelete={onDelete} onAdd={onAdd}/>:null}
    </div>
  );
};

