import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import BookCard from "../common/BookCard";
import { Book } from "../../interfaces/Book";

export default function BooksSection({title, books} : {title: string, books: Array<Book>}) {

  return (
    <Box mt={5}>
        <Typography variant="h6" color={"primary"}>{title}</Typography>

        <Box display={"flex"} gap={3} height={"425px"}>
            <Swiper
            slidesPerView={6}
            slidesPerGroup={6}
            slidesPerGroupSkip={0}
            loop={true}
            centeredSlides={false}
            style={{
            flexGrow: 1,
            border: "1px solid orange"
            }}
            >
            {
                books.map((bookData, i: number)=>{
                    return (
                        <SwiperSlide key={i}>
                            <BookCard {...bookData}/>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>

        </Box>
    </Box>
  )
}
