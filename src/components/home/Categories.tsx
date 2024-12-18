import { Box, Grid2, styled, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BookImg = styled('img')(({theme})=>({
    objectFit: "cover",
    width: "100%",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.short,
    }),
    "&:hover": {
      transform: "scale(1.1)"
    }
}))

const imgUrls = ["https://www.penguinlibros.com/ar/img/cms/Argentina/Literatura-1.jpg", "https://www.penguinlibros.com/ar/img/cms/Argentina/Tematicas-Bienestar-1.webp", "https://www.penguinlibros.com/ar/img/cms/Argentina/Tematicas-Familia-1.webp", "https://www.penguinlibros.com/ar/img/cms/Argentina/Tematicas-Cocina-1.webp", "https://www.penguinlibros.com/ar/img/cms/Argentina/infantil_.jpg", "https://www.penguinlibros.com/ar/img/cms/Argentina/Tematicas-Clasicos-1.webp", "https://www.penguinlibros.com/ar/img/cms/Argentina/Novela-Romantica-1.jpg", "https://www.penguinlibros.com/ar/img/cms/Argentina/fantasia_.jpg"]
const titles = ["Literatura", "Bienestar", "Familia y crianza", "Cocina", "Infantil", "Grandes clásicos", "Románticas", "Aventura"]

export default function Categories() {
  return (
    <Box mt={10}>
      <Typography color="primary.contrastText" variant="h4" textAlign={"center"} mb={4}>Los mejores libros por temática</Typography>
      <Grid2 position={"relative"} container rowSpacing={2}>
          <Box position={"absolute"} top={"-15%"} left={"50%"} height={"110%"} width={"100vw"} zIndex={-1} bgcolor={"secondary.main"} sx={{ transform: "translateX(-50%)" }}></Box>
          {
              imgUrls.map((url, i)=>(
                  <Grid2 component={RouterLink} to={`tienda?category=${titles[i]}`} key={i} width={"25%"} position={"relative"} overflow={"hidden"}>
                      <Typography variant="h5" textAlign={"center"} color="text.primary" bgcolor={"background.default"} position={"absolute"} zIndex={3} width={"80%"} left={"50%"} top={15} sx={{ transform: "translateX(-50%)" }}>{titles[i]}</Typography>
                      <BookImg src={url} />
                  </Grid2>
              ))
          }
      </Grid2>
    </Box>
  )
}
