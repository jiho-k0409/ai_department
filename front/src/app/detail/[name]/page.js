import axios from "axios";
import Card from "/components/Card.js"
export default async function Detail({params}){
    const professor = decodeURIComponent(params.name);
    const data = await axios('http://127.0.0.1:5000/faculty');
    let i=0;
    for(i=0;i<data.data.length;i++){
        if(data.data[i].kor==professor)break;
    }
    return (
        <>
            <h1 className="text-sejong-gray text-5xl text-center mt-10">{professor} {data.data[i].eng}</h1>
            <Card name={professor} position={data.data[i].position} email={data.data[i].email} major={data.data[i].major} doctoral={data.data[i].doctoral} site={data.data[i].lab.site}/>
        </>
    );
}