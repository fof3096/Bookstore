import Box from '@mui/material/Box'
import Carousel from './Carousel'
import InfoBar from './InfoBar'
import FeaturedBooks from './FeaturedBooks'
import BooksSection from './BooksSection'
import { useState } from "react";
import Categories from './Categories'

export default function Home() {
  const [books] = useState(Array(24).fill(
    {
      title: "Blackwater / Parte I: La riada",
      description: "Las gélidas y oscuras aguas del río Blackwater inundan Perdido, un pequeño pueblo al sur de Alabama. Allí, los Caskey, un gran clan de ricos terratenientes, intentan hacer frente a los daños causados por la riada. Liderados por Mary-Love, la incontestable matriarca, y Óscar, su obediente hijo, los Caskey trabajan por recomponerse y salvaguardar su fortuna. Pero no cuentan con la aparición de la misteriosa Elinor Dammert. Una joven hermosa pero parca en palabras con un único objetivo: acercarse a los Caskey cueste lo que cueste.",
      authors: ["Michael McDowell", "Diana"],
      categories: ["Terror", "Ficción"],
      imageLink: "https://data.livriz.com/media/mediaspace/F9AFB48D-741D-4834-B760-F59344EEFF34/45/b77b4b89-900a-4cdc-a9da-049129fb633d/9789878453507_a42918b3-fcc2-449a-bb30-11b5607d56bf.jpg",
      price: 14.999
    }  
  ))

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
