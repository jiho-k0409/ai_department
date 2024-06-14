import ListCard from '/components/ListCard.js'
import axios from "axios";
import Link from 'next/link';
export default async function Home() {
  const data = await axios('http://127.0.0.1:5000/faculty');
  console.log(data.data)
  return (
    <>
      <div className='mt-10 font-extrabold text-5xl text-sejong-gray mx-auto text-center'>교수소개</div>
      <hr className='my-5'></hr>
      <div className='ml-10 grid grid-cols-3 gap-y-6 gap-y-[400px] justify-center'>
        {
          data.data.map((content)=>{
            return <Link href={`/detail/${content.kor}`}><ListCard name={content.kor} loc={content.lab.location} phone={content.lab.phone}/></Link>
          })
        }
      </div>
      
    </>
  );
}
