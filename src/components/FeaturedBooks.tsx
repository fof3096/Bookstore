import { Box, Stack, styled, Typography } from "@mui/material";
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
        <Stack flexGrow={1} border={1} borderColor={"primary.main"} direction={"row"}>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
          <BookCard/>
        </Stack>

        <BookImg src="https://market2.livriz.com/storage/section/1/manual%20para%20mujeres(1).jpg"/>
      </Box>
    </Box>
  )
}

// grande: https://ventadelibros.com.ar/wp-content/uploads/2024/09/9789878453521-185x275.jpg
// extra alto: https://ventadelibros.com.ar/wp-content/uploads/2024/07/9789873987564-185x315.jpg
// alto: https://ventadelibros.com.ar/wp-content/uploads/2024/08/9788476271889-185x283.jpg
// normal: https://ventadelibros.com.ar/wp-content/uploads/2024/08/9788476272251-185x267.jpg

// imagen de la más alta calidad 💪: https://ventadelibros.com.ar/wp-content/uploads/2024/08/9788419275202-600x960.jpg