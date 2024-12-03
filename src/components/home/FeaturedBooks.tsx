import { Box, styled, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import BookCard from "../common/BookCard";
import { Book } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

const BookImg = styled('img')(()=>({
  objectFit: "cover",
  height: "100%",
}))

interface Book {
  title: string;
  description: string;
  authors: Array<string>;
  language: string;
  categories: string;
  imageLinks: { thumbnail: string };
}

interface BooksData {
    volumeInfo: Book
}

export default function FeaturedBooks({books} : {books: Array<BooksData>}) {

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
            {
              books.map((bookData, i: number)=>{
                const { volumeInfo }: {volumeInfo: Book} = bookData;
                
                return <SwiperSlide key={i}>
                  <BookCard
                    title={volumeInfo?.title || "Titulo no disponible"}
                    authors={volumeInfo?.authors}
                    imageLink={volumeInfo?.imageLinks?.thumbnail || "Portada no disponible"}
                  />
                </SwiperSlide>
              })
            }
          </Swiper>

        <RouterLink to={"/tienda/Forastera"}>
          <BookImg src="https://market2.livriz.com/storage/section/1/forastera(1).jpg"/>
        </RouterLink>
      </Box>
    </Box>
  )
}