import Image from "next/image";
import Right from "../icons/Right";

export default function Hero(){
  return (
    <section className="hero">
    <div className="py-14"> 
       <h1 className="text-4xl font-semibold leading-20">
        Everything <br/>
        is better<br/> 
        with&nbsp; 
        <span className="text-red-600">
            MykoPizza
        </span>
        </h1>
       <p className="my-6 text-gray-500 text-sm">
        Myko Pizza is the missing piece that makes 
        every day complete, delicious joy in life!
        </p>
        <div className="flex gap-4 text-sm">
            <button className="bg-red-600 items-center gap-2 flex text-white px-5 py-2 rounded-full font-semibold">
                Order now
                <Right/>
            </button>
            <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                Learn more
                <Right/>
            </button>
        </div>
    </div>
    <div className="relative">
        <Image src={'/pizza-image-png.png'} layout={'fill'} 
        objectFit={'contain'} alt={'pizza'} />
    </div>
    </section>
  );  
}