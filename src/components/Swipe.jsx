import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, EffectCube, Navigation, Pagination } from 'swiper/modules';

export function Swipe() {
    return (
        <div className='flex justify-center'>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                autoplay={false}
                loop={true}
                navigation={{
                    nextEl: '.custom-swiper-button-prev',
                    prevEl: '.custom-swiper-button-next',
                }}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                modules={[EffectCube, Pagination, Navigation, Autoplay]}
                className="w-full h-1/2 absolute mt-40"
            >
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573515/gallery1_h6sc2n.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573514/gallery2_weamoj.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573518/gallery5_az6a9f.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573520/gallery3_r9tpja.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573524/gallery4_uee8pu.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573533/gallery7_u8tkgu.jpg" />
                </SwiperSlide>
                <SwiperSlide className='flex justify-center items-center'>
                    <img className='relative w-100 h-full' src="https://res.cloudinary.com/dgp2hrhld/image/upload/v1712573530/gallery6_b5t4zl.jpg" />
                </SwiperSlide>
            </Swiper>
            <div className='w-screen flex gap-96 mt-96'>
                <div className="z-10 top-1/2 left-4 pl-96">
                    <button
                        className="custom-swiper-button-next bg-gray-400 opacity-40 hover:opacity-100 hover:bg-black rounded-full w-8 h-8 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>
                <div className="z-10 top-1/2 right-4 pl-96 ml-72">
                    <button
                        className="custom-swiper-button-prev bg-gray-400 opacity-40 hover:opacity-100 hover:bg-black rounded-full w-8 h-8 flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentcolor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>




    );
}
