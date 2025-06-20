
import React from 'react'
import { useState } from 'react';
import { FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Card = (props) => {
    let cource= props.course;
    let likedCourses= props.likedCourses;
    let setLikedCourses= props.setLikedCourses;

   function clickHandler(){

    if(likedCourses.includes(cource.id)) {
        setLikedCourses( (prev)=> prev.filter( (cid) =>(cid !== cource.id) ) );
        toast.warning("like removed");
        
    }
    else{

        if(likedCourses.length === 0) 
           {
                setLikedCourses([cource.id]);
           } 
        else{
            setLikedCourses( (prev) => [...prev, cource.id]);
        }
        toast.success("Liked Successfully");
    }

   }





  return (
    <div className='w-[300px] bg-black/50 rounded-md overflow-hidden'>
        <div className='relative '>
            <img src={cource.image.url} alt={cource.image.alt}  loading='lazy'/>
            
            <div className='absolute w-[40px] h-[40px] bg-white rounded-full right-2 -bottom-4 flex justify-center items-center'>
                <button onClick={clickHandler} className='cursor-pointer'>
                    {
                        likedCourses.includes(cource.id) ?
                        (<FcLike size={28}></FcLike>):(<FcLikePlaceholder size={28}/>)
                    }
                   
                </button>
            </div>

        </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{cource.title}</p>
            <p className='mt-2 text-white'>
                {
                    cource.description.length > 100 ? 
                    (cource.description.substr(0,100))+ "..." : 
                    (cource.description) +"..."
                }
            </p>
        </div>
                
    </div>
  )
}

export default Card