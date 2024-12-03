import { Box, Button, Input, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function NewsLetter() {
  return (
    <Box px={8} py={4} borderRadius={5} position={"absolute"} top={"-90%"} display={"flex"} justifyContent={"space-between"} sx={{ backgroundColor: "secondary.dark" }}>
        <Typography flexBasis={"60%"} variant='h3' fontWeight={"bold"} color='primary'>
            Mantente actualizado sobre nuestras ofertas
        </Typography>
        <Box display={"flex"} flexDirection={"column"} flexBasis={"30%"} gap={2}>
            <Input disableUnderline placeholder='Ingresa tu email' sx={{ flexBasis: "50%", bgcolor: "white", borderRadius: 5, fontSize:16 }} startAdornment={<MailOutlineIcon color='primary' sx={{ ml: 1.8, mr: 1 }}/>}></Input>
            <Button sx={{ flexBasis: "50%", bgcolor: "primary.contrastText", borderRadius: 5, fontSize:16, textTransform: "none" }}>Suscríbete al Boletín</Button>
        </Box>
    </Box>
  )
}
