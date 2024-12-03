import { Swiper, SwiperSlide } from "swiper/react"
import '../common/swiperStyles.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Link as RouterLink } from "react-router-dom";

const imgUrls = [
  "https://market2.livriz.com/storage/section/1/La%20cocinera%20de%20la%20mansi%C3%B3n_1050x580%20(1).png",
  "https://market2.livriz.com/storage/section/1/0003.jpg",
  "https://market2.livriz.com/storage/section/1/hankang(1).jpg",
  "https://market2.livriz.com/storage/section/1/jardin%20de%20noche.jpg",
  "https://market2.livriz.com/storage/section/1/paramo.jpg",
]

const links = [
  "EXAMPLE_1",
  "EXAMPLE_2",
  "EXAMPLE_3",
  "EXAMPLE_4",
  "EXAMPLE_5",
]

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
            <RouterLink to={`/tienda/${links[i]}`}>
              <img src={url}/>
            </RouterLink>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}
