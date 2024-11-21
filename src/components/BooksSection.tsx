import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import BookCard from "./common/BookCard";

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

export default function BooksSection({title, books} : {title: string, books: Array<BooksData>}) {

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
                const { volumeInfo }: {volumeInfo: Book} = bookData;
                
                return <SwiperSlide key={i}>
                    <BookCard
                    title={volumeInfo?.title || "Titulo no disponible"}
                    authors={volumeInfo?.authors}
                    imageLink={volumeInfo?.imageLinks?.thumbnail || "https://ventadelibros.com.ar/wp-content/uploads/2024/08/9788419275202-600x960.jpg"}
                    />
                </SwiperSlide>
                })
            }
            </Swiper>

        </Box>
    </Box>
  )
}
