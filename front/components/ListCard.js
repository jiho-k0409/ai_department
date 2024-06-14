export default function ListCard({name,loc,phone}){
    return (
        <>
            <div className="group relative w-full max-w-[500px] mx-auto mb-8">
                <img className="object-cover absolute z-0 shadow-lg w-[420px]" src="/img/CardBg.jpeg"/>
                <div className="mt-8 z-1 absolute grid grid-cols-card w-full">
                    <div className="mt-20 justify-self-center w-25">
                        <h1 className="font-bold text-2xl mb-3">{name}</h1>
                        <div className="font-light">{loc}</div>
                        <div className="font-light">{phone}</div>
                    </div>
                    <img src={`/img/faculty/${name}.png`} className="mt-5 justify-self-center object-cover w-[200px] mr-10"/>
                </div>
            </div>
        </>
    );
}
