import { Swiper, SwiperSlide } from "swiper/react"
import '../common/swiperStyles.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from "swiper/modules";

const imgUrls = ["https://market2.livriz.com/storage/section/1/La%20cocinera%20de%20la%20mansi%C3%B3n_1050x580%20(1).png", "https://market2.livriz.com/storage/section/1/banner_bonelli.jpg", "https://market2.livriz.com/storage/section/1/hankang(1).jpg", "https://market2.livriz.com/storage/section/1/BANNER%2010%20OFF%2020-11.jpg", "https://market2.livriz.com/storage/section/1/banner%20pack%20yarros.jpg", "https://market2.livriz.com/storage/section/1/jardin%20de%20noche.jpg", "https://market2.livriz.com/storage/section/1/paramo.jpg"]

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
      {
        imgUrls.map((url, i)=> (
          <SwiperSlide key={i}>
            <img src={url}/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
