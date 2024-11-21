import { Box, Grid2, styled, Typography } from "@mui/material";

const BookImg = styled('img')(()=>({
    objectFit: "cover",
    width: "100%",
  }))

const imgUrls = ["https://www.penguinlibros.com/ar/img/cms/Argentina/Literatura-1.jpg", "https://www.penguinlibros.com/ar/img/cms/Argentina/Tematicas-Bienestar-1.webp", "https://www.penguinlibros.com/ar/img/cms/Argentina/Tematicas-Familia-1.webp", "https://www.penguinlibros.com/ar/img/cms/Argentina/Tematicas-Cocina-1.webp", "https://www.penguinlibros.com/ar/img/cms/Argentina/infantil_.jpg", "https://www.penguinlibros.com/ar/img/cms/Argentina/Tematicas-Clasicos-1.webp", "https://www.penguinlibros.com/ar/img/cms/Argentina/Novela-Romantica-1.jpg", "https://www.penguinlibros.com/ar/img/cms/Argentina/fantasia_.jpg"]

export default function Categories() {
  return (
    <Box mt={10}>
      <Typography color="primary.contrastText" variant="h4" textAlign={"center"} mb={4}>Los mejores libros por temática</Typography>
      <Grid2 position={"relative"} container rowSpacing={2}>
          <Box position={"absolute"} top={"-15%"} left={"50%"} height={"110%"} width={"100vw"} zIndex={-1} bgcolor={"secondary.main"} sx={{ transform: "translateX(-50%)"}}></Box>
          {
              imgUrls.map((url, id)=>(
                  <Grid2 key={id} width={"25%"}>
                      <BookImg src={url}/>
                  </Grid2>
              ))
          }
      </Grid2>
    </Box>
  )
}
