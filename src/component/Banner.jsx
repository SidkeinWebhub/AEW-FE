import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import {Autoplay, EffectCards, Pagination } from 'swiper/modules';
import './css/banner.css'
import { NavLink } from 'react-router-dom'

function Banner() {
  return (
    <>
      <Swiper
        effect={'card'}
        grabCursor={true}
        loop = {true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[Autoplay,EffectCards, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='bg-img1'>
          <h1>ATTHI ENGINEERING WORKS</h1>
          <p>At ATTHI ENGINEERING WORKS, we transform ideas into reality through precision engineering and unparalleled dedication. As specialists in Atomic Plant High-Pressure Piping, Structurals, Manpower Supply, Ducting, and Equipment Erection, we bring a legacy of excellence to every project.</p>
          <NavLink to={`/service`} className='nav-link'>
          <button className='button-banner'> Explore
          </button>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className='bg-img2'>
          <h1>ATTHI ENGINEERING WORKS</h1>
          <p>Discover the possibilities that await your project with ATTHI ENGINEERING WORKS. Whether you're embarking on a new venture or seeking to enhance existing infrastructure, our team is ready to collaborate and bring your vision to life.</p>
          <NavLink to={`/contact`} className='nav-link'>
          <button className='button-banner'> Contact Us
          </button>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner
