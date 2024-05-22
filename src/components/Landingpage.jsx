import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
    motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed ="-.8"className='w-full h-screen bg-zinc-900 pt-2'>
        <div className="textstructure mt-52 px-20">
            {["we create","eye opening","Presentations"].map((item,index)=>{
                return (
                <div className="masker">
                    <div className="w-fit flex items-end overflow-hidden">
                        {index===1 && (<motion.div initial={{width:0}}
                        animate={{width:"9vw"}} transition ={{ease:[0.76,0,0.24,1],duration:1}}
                        className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] relative -bottom-[1vw] bg-green-500"></motion.div>)}
                <h1 className='uppercase text-8xl leading-[6vw] font-["Founders Grotesk X-Cond SmBd"] font-bold'>{item}</h1>
                </div>
            </div>
            );
            })}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
            {["for public and private companies","from the first pitch to IPO",].map((item,index)=>(<p className="text-md font-light tracking-tight leading-none">{item}</p>))}
            <div className="start flex items-center gap-5">
            <div className="px-5 py-2 border-[2px]border-zinc-500 font-light text-md uppercase rounded-full">start the project</div>
            <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">            
                <FaArrowUpLong />
            </span>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Landingpage