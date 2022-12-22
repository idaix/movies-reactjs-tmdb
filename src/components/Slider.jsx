import { Swiper, SwiperSlide } from 'swiper/react'
// Swiper Styles
import "swiper/css"

const BASE_URL = 'https://image.tmdb.org/t/p/original/'
const Slider = ({ data }) => {
  return (
    <div className='bg-white/10 backdrop-blur-md rounded w-full h-full overflow-hidden'>
        <Swiper className='mySwiper w-full h-full text-center'>
            {data?.map(item=>(
              <div key={item.id}>
                <SwiperSlide className='relative'>
                  {item.backdrop_path&&
                    <img src={`${BASE_URL}${item?.backdrop_path}`} alt={item.title} />
                  }
                  <span className='absolute bottom-3 left-3 text-white text-lg font-bold'>{item.title}</span>
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
    </div>
  )
}

export default Slider