import { Box, styled, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import BookCard from "./BookCard";
import { useEffect, useState } from "react";

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

export default function NewBooks() {

  const [books, setBooks] = useState([])

  useEffect(()=>{
    const fetchFeaturedBooks = async () =>{
      try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&projection=full&fields=items(volumeInfo(title,authors,description,categories,imageLinks,language))&maxResults=18")
        const data = await response.json();
        setBooks(data.items || [])
      } catch (error) {
        console.log("Error al realizar la peticion de libros más vendidos");
      }
    }

    fetchFeaturedBooks();
  },[])

  return (
    <Box>
        <Typography textAlign={"center"} variant="h6" color={"primary"}>Novedades del mes</Typography>

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
                books.map((bookData, id: number)=>{
                const { volumeInfo }: {volumeInfo: Book} = bookData;
                
                return <SwiperSlide key={id}>
                    <BookCard
                    title={volumeInfo?.title || "Titulo no disponible"}
                    authors={volumeInfo?.authors}
                    imageLink={volumeInfo?.imageLinks?.thumbnail || "Portada no disponible"}
                    />
                </SwiperSlide>
                })
            }
            </Swiper>

        </Box>
    </Box>
  )
}
