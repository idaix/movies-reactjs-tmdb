import { Swiper, SwiperSlide } from 'swiper/react'
// Swiper Styles
import "swiper/css"


const Slider = () => {
  return (
    <div className='bg-white/10 backdrop-blur-md rounded w-full h-96 overflow-hidden'>
        <Swiper className='mySwiper w-full h-full text-center'>
            <SwiperSlide>Poster - 1 -</SwiperSlide>
            <SwiperSlide>Poster - 2 -</SwiperSlide>
            <SwiperSlide>Poster - 3 -</SwiperSlide>
            <SwiperSlide>Poster - 4 -</SwiperSlide>
            <SwiperSlide>Poster - 5 -</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider