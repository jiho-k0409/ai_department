export default function Profile({name, position,email,major,doctoral,site}) {
    return (
        <div className="flex p-10 justify-center">
            <div className="relative flex-shrink-0 ml-10">
                <div className="bg-sejong-crimson w-60 h-80 absolute top-0 left-0 shadow-lg"></div>
                <div className="mt-3 ml-3 flex flex-col w-60 h-80 bg-white shadow-lg relative">
                    <img className="w-12 h-12 my-5 ml-5" src="/sejong_logo.svg" alt="세종 로고"/>
                    <div className="ml-5 h-4 leading-4 text-sejong-gray text-xl font-sans font-bold">SJU</div>
                    <div className="ml-5 font-serif text-sm">ARTIFICIAL INTELLIGENCE</div>
                    <img className="mt-3 h-[150px] w-[130px] mx-auto" src={`/img/faculty/${name}.png`} alt="프로필 이미지"/>
                </div>
            </div>
            <div className="ml-10 flex flex-col justify-center gap-y-5 text-2xl">
                <div className="pb-3 border-b border-gray-800">직위 {position}</div>
                <div className="pb-3 border-b border-gray-800">이메일 {email}</div>
                <div className="pb-3 border-b border-gray-800">전공 {major}</div>
                <div className="pb-3 border-b border-gray-800">학력 {doctoral}</div>
                <div>홈페이지: <a href={site} target="_blank" rel="noopener noreferrer">{site}</a></div>
            </div>
        </div>
    );
}
