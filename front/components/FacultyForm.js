'use client'
import { useState } from 'react';

const FacultyForm = ({ currentMember, onSave, onCancel }) => {
  let [previewImg, setPreviewImg] = useState(0);
  let [real,setReal] = useState(currentMember.kor);
  let [kor,setKor] = useState(currentMember.kor);
  let [eng,setEng] = useState(currentMember.eng);
  let [position,setPosition] = useState(currentMember.position);
  let [email,setEmail] = useState(currentMember.email);
  let [doctoral,setDoctoral] = useState(currentMember.doctoral);
  let [location,setLocation] = useState(currentMember.lab.location);
  let [phone,setPhone] = useState(currentMember.lab.phone);
  let [site,setSite] = useState(currentMember.lab.site);
  let [major,setMajor] = useState(currentMember.major);
  let [photo,setPhoto] = useState('')
  let formData = new FormData()
  function uploadFile(e) {
    let fileArr = e.target.files;
    let fileRead = new FileReader();
    fileRead.onload = function() {
      setPreviewImg(fileRead.result);
    };
    fileRead.readAsDataURL(fileArr[0]);
    setPhoto(fileArr[0]);
  };

  function makeData(formData){
    formData.append('kor',kor);
    formData.append('eng',eng);
    formData.append('email',email);
    formData.append('major',major);
    formData.append('doctoral',doctoral);
    formData.append('location',location);
    formData.append('position',position);
    formData.append('phone',phone);
    formData.append('website',site);
    formData.append('photo',photo);
    formData.append('before',real);
  }
  function handleSubmit(){
    makeData(formData);
    for(const key of formData.keys())
      console.log(key,formData.get(key));
    onSave(formData);
    formData=new FormData()
  }
  function handleCancel(){
    onCancel()
    formData=new FormData()
  }
  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">{currentMember ? 'Edit Faculty' : 'Add Faculty'}</h2>
      <div className="mb-4">
        <label htmlFor='image'>
          <img className='w-[200px]' src={previewImg!=0 ? previewImg : currentMember.kor==''? '/img/upload.png' :`/img/faculty/${currentMember.kor}.png`} alt="Profile" />
        </label>
        <input
          id='image'
          type="file"
          className="hidden"
          required
          onChange={uploadFile}
        />
        <label htmlFor='kor' className="block text-gray-700">성함</label>
        <input
          id='kor'
          type="text"
          name="kor"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          defaultValue={currentMember.kor}
          onChange={(e)=>setKor(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='eng' className="block text-gray-700">영문명</label>
        <input
          id='eng'
          type="text"
          name="eng"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          defaultValue={currentMember.eng}
          onChange={(e)=>setEng(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='email' className="block text-gray-700">이메일</label>
        <input
          id='email'
          type="text"
          name="eng"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          defaultValue={currentMember.email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='position' className="block text-gray-700">직위</label>
        <input
          id='position'
          type="text"
          name="position"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          defaultValue={currentMember.position}
          onChange={(e)=>setPosition(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='location' className="block text-gray-700">연구실</label>
        <input
          id='location'
          type="text"
          name="labLocation"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          defaultValue={currentMember.lab.location}
          onChange={(e)=>setLocation(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='phone' className="block text-gray-700">연락처</label>
        <input
          id='phone'
          type="text"
          name="labPhone"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          defaultValue={currentMember.lab.phone}
          onChange={(e)=>setPhone(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='major' className="block text-gray-700">전공</label>
        <input
          id='major'
          type="text"
          name="major"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          defaultValue={currentMember.major}
          onChange={(e)=>setMajor(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='doctoral' className="block text-gray-700">학력</label>
        <input
          id='doctoral'
          type="text"
          name="doctoral"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          defaultValue={currentMember.doctoral}
          onChange={(e)=>setDoctoral(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor='site' className="block text-gray-700">홈페이지</label>
        <input
          id='site'
          type="text"
          name="labSite"
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
          defaultValue={currentMember.lab.site}
          onChange={(e)=>setSite(e.target.value)}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default FacultyForm;
