import { Box, styled, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import BookCard from "./BookCard";

const BookImg = styled('img')(()=>({
  objectFit: "cover",
  height: "100%",
}))

export default function FeaturedBooks() {
  return (
    <Box>
      <Typography variant="h6" color={"primary"}>Los más vendidos de la semana</Typography>

      <Box display={"flex"} gap={3} height={"425px"}>
          <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          slidesPerGroupSkip={0}
          loop={true}
          centeredSlides={false}
          style={{
            flexGrow: 1,
            border: "1px solid orange"
          }}
          >
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
            <SwiperSlide>
              <BookCard/>
            </SwiperSlide>
          </Swiper>

        <BookImg src="https://market2.livriz.com/storage/section/1/manual%20para%20mujeres(1).jpg"/>
      </Box>
    </Box>
  )
}