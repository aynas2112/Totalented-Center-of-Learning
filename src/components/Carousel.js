import React, {useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Carousel = () => {
    const slides=[
        {
          url:'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
        },
        {
          url:'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80'
        },
        {
          url:'https://images.unsplash.com/photo-1535837487710-a191373a20ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
        }
      ];

      const [currentIndex,setCurrentIndex]=useState(0)

      const prevSlide=()=>{
        const isFirstSlide=currentIndex===0;
        const newIndex=isFirstSlide ? slides.length -1: currentIndex -1;
        setCurrentIndex(newIndex); 
      }

      const nextSlide=()=>{
         const isLastSlide=currentIndex===slides.length-1;
         const newIndex=isLastSlide ? 0:currentIndex+1;
         setCurrentIndex(newIndex);
      }

      const goToSlide=(slideIndex)=>{
        setCurrentIndex(slideIndex);
      }
  return (
    <div className='max-w-[1200px] h-[800px] w-full m-auto py-40 px-4 relative group' >
      <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
      {/* Left Arrow  */}
      <div className='hidden group-hover:block absolute top-50% -translate-x-0 translate-y-[-550%] left-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer'> 
        <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      {/* Right Arrow  */}
      <div className='hidden group-hover:block absolute top-50% -translate-x-0 translate-y-[-550%] right-5 text-2xl rounded-full p-2 bg-black/20  text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide,slideIndex)=>(
            <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                <RxDotFilled /> 
            </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel