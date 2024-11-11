import Box from '@mui/material/Box'
import Carousel from './Carousel'

export default function Body() {
  return (
    <Box component={"main"} mx={"auto"} sx={{ bgcolor: "burlywood", maxWidth: 1300}}>
        <Carousel />
    </Box>
  )
}
