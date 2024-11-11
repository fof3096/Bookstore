import { Swiper, SwiperSlide } from "swiper/react"
import './swiperStyles.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from "swiper/modules";

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={"auto"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      loop={true}
      spaceBetween={10}
      
      centeredSlides={true}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 0,
        depth: 0,
        slideShadows: false
      }}
      className="swiper_container"
      modules={[Autoplay, EffectCoverflow]}
    >
      <SwiperSlide>
        <img src="https://market2.livriz.com/storage/section/1/BLACKWATER.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://market2.livriz.com/storage/section/1/C%C3%BAspide_Umbriel%201050x580.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://market2.livriz.com/storage/section/1/banner_theodoros.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://market2.livriz.com/storage/section/1/BLACKWATER.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://market2.livriz.com/storage/section/1/C%C3%BAspide_Umbriel%201050x580.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://market2.livriz.com/storage/section/1/banner_theodoros.jpg"/>
      </SwiperSlide>
    </Swiper>
  )
}
