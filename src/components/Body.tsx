import Box from '@mui/material/Box'
import Carousel from './Carousel'
import InfoBar from './InfoBar'

export default function Body() {
  return (
    <Box component={"main"} mx={"auto"} sx={{ maxWidth: 1300}}>
        <Carousel />
        <InfoBar />
    </Box>
  )
}
