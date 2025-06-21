import React from 'react'
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Card from './Card'

const Testimonial = (props) => {

    const [number, setNumber] = useState(0);


    function leftShiftHandler() {
        setNumber((number - 1 + reviews.length) % reviews.length);
    }

    function rightShiftHandler() {
        setNumber((number + 1) % reviews.length);

    }
    function surpriseHandler() {
        setNumber(Math.floor(Math.random() * reviews.length))
    }



    let reviews = props.reviews;
    return (
        <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700
                        hover:shadow-xl'>
            <Card review={reviews[number]} />

            <div className='flex text-3xl mt-10 mb-3 gap-3 text-violet-400 font-bold mx-auto'>
                <button onClick={leftShiftHandler}
                    className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft />
                </button>
                <button onClick={rightShiftHandler}
                    className='cursor-pointer hover:text-violet-500'>
                    <FiChevronRight />
                </button>
            </div>

            <div>
                <button onClick={surpriseHandler}
                    className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer 
                    px-10 py-2 rounded-md text-white text-lg'>
                    Surprise Me</button>
            </div>
        </div>
    )
}

export default Testimonial 