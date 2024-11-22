import Box from '@mui/material/Box'
import Carousel from './Carousel'
import InfoBar from './InfoBar'
import FeaturedBooks from './FeaturedBooks'
import BooksSection from './BooksSection'
import { useEffect, useState } from "react";
import Categories from './Categories'

export default function Home() {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    const fetchExampleBooks = async () =>{
      try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&projection=full&fields=items(volumeInfo(title,authors,description,categories,imageLinks,language))&maxResults=24")
        const data = await response.json();
        setBooks(data.items || [])
      } catch (error) {
        console.log("Error al realizar la peticion de libros");
      }
    }
    
    fetchExampleBooks();
  },[])

  return (
    <Box component={"main"} mx={"auto"} sx={{ maxWidth: 1300}}>
        <Carousel />
        <InfoBar />
        <FeaturedBooks books={books}/>
        <BooksSection title='Novedades del mes' books={books}/>
        <BooksSection title='Fantasia' books={books}/>
        <Categories />
    </Box>
  )
}
