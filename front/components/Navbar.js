'use client'
import {useState} from 'react';
import Link from 'next/link';

export default function NavBar(){
    let [section,setSection] = useState(-1)
    const content =[
        ['학과소개','교과목소개','교과과정','시설안내'],
        ['학과내규','교과목일람표'],
        ['교수소개','Pattern Recognition and Machine Learning Lab','Human Centric AI Lab','Data Intelligence and Application Lab','Multimodal AI Lab','AI Systems Lab'],
        ['학부 공지사항','대학원 공지사항','취업/공모전/장학','교육/세미나','자료실']
    ]
    const title = ['Department','Graduate','Faculty','Event']
    return (
        <>
            <nav>
            <div className="flex items-center justify-between h-28">
            <Link href="http://sejong.ac.kr" target="_blank"><img className="ml-10 mr-4 size-16" src='/sejong_logo.svg'></img></Link>
                <div className="font-serif text-sejong-gray text-3xl font-semibold"><Link href="http://sejong.ac.kr" target="_blank">SEJONG UNIVERSITY</Link></div>
                    <Link onMouseEnter={()=>setSection(0)} className="hover:text-sejong-crimson mx-auto text-xl justify-self-stretch" href='#'>학부</Link>
                    <Link onMouseEnter={()=>setSection(1)} className="hover:text-sejong-crimson mx-auto text-xl justify-self-stretch" href='#'>대학원</Link>
                    <Link onMouseEnter={()=>setSection(2)} className='hover:text-sejong-crimson mx-auto text-xl justify-self-stretch' href='#'>교수/연구</Link>
                    <Link onMouseEnter={()=>setSection(3)} className="hover:text-sejong-crimson mx-auto text-xl justify-self-stretch" href='#'>소식/행사</Link>
                </div>
            </nav>
            <div className="relative overflow-hidden h-80 bg-black">
                    <img className="absolute z-0 h-full object-cover w-full h-[476px]" src="/img/sejong-banner.png"/>
                    <div onMouseLeave={()=>setSection(-1)} className={`${section!=-1?'bg-white bg-opacity-70':null} absolute z-10 h-full w-full grid grid-cols-2 items-center gap-[32rem]`}>
                        <div className='text-center text-[3.5rem] text-sejong-gray font-bold justify-self-end'>{title[section]}</div>
                        <div className='grid gird-cols-1 justify-items-start justify-self-center'>
                            {section!=-1?content[section].map((item, index) => (
                                <Link href='#' key={index} className="hover:text-sejong-crimson text-2xl mb-3 text-sejong-gray font-semibold">- {item}</Link>
                        )):null}
                        </div>
                    </div>
            </div>              
        </>
    );
}