import { Box, Button, Container, Grid2, IconButton, Link, List, ListItem, Input, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer() {
  return (
    <Container disableGutters maxWidth={false} component={"footer"} sx={{ bgcolor: "#f0f0f0", px: 8, py: 15, mt: 20 }}>
        <Box mx={"auto"} maxWidth={1300} position={"relative"}>
            <Box px={8} py={4} borderRadius={5} position={"absolute"} top={"-90%"} display={"flex"} justifyContent={"space-between"} sx={{ backgroundColor: "secondary.dark" }}>
                <Typography flexBasis={"60%"} variant='h3' fontWeight={"bold"} color='primary'>
                    Mantente actualizado sobre nuestras ofertas
                </Typography>
                <Box display={"flex"} flexDirection={"column"} flexBasis={"30%"} gap={2}>
                    <Input disableUnderline placeholder='Ingresa tu email' sx={{ flexBasis: "50%", bgcolor: "white", borderRadius: 5, fontSize:16 }} startAdornment={<MailOutlineIcon color='primary' sx={{ ml: 1.8, mr: 1 }}/>}></Input>
                    <Button sx={{ flexBasis: "50%", bgcolor: "primary.contrastText", borderRadius: 5, fontSize:16, textTransform: "none" }}>Suscríbete al Boletin</Button>
                </Box>
            </Box>

            <Grid2 container borderBottom={1} minHeight={209}>
                <Grid2 size={4} paddingRight={9}>
                    <Typography mb={1} variant='h4'>Bull Terrier</Typography>
                    <Typography mb={3} color='textSecondary'>Descubre un universo de historias, conocimiento e inspiración en nuestra librería. Nos apasiona fomentar la lectura y ofrecer una amplia variedad de libros para todas las edades y gustos.</Typography>
                    <Stack direction={"row"} spacing={1}>
                        <IconButton size='small' sx={{ boxShadow: 1 }}>
                            <InstagramIcon sx={{ fontSize: 18 }}/>
                        </IconButton>
                        <IconButton size='small' sx={{ boxShadow: 1 }}>
                            <FacebookIcon sx={{ fontSize: 18 }}/>
                        </IconButton>
                        <IconButton size='small' sx={{ boxShadow: 1 }}>
                            <WhatsAppIcon sx={{ fontSize: 18 }}/>
                        </IconButton>
                        <IconButton size='small' sx={{ boxShadow: 1 }}>
                            <PlaceIcon sx={{ fontSize: 18 }}/>
                        </IconButton>
                    </Stack>
                </Grid2>
                <Grid2 size={2}>
                    <Typography variant='h6'>NOSOTROS</Typography>
                    <List>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>Locales en la Provincia</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>Trabajar con Nosotros</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>Politica de Privacidad</Link>
                        </ListItem>
                    </List>
                </Grid2>
                
                <Grid2 size={2}>
                    <Typography variant='h6'>AYUDA</Typography>
                    <List>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>Demora de Envios</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>Devoluciones</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>Medios de Pago</Link>
                        </ListItem>
                    </List>
                </Grid2>
                
                <Grid2 size={2}>
                    <Typography variant='h6'>COMPRAS</Typography>
                    <List>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>Promociones Locales</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>Costo de Envios</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>Cancelacion de Compra</Link>
                        </ListItem>
                    </List>
                </Grid2>
            </Grid2>
            
            <Box>
                <Typography color='textSecondary'>Bull Terrier © 2024, Todos los Derechos Reservados</Typography>
            </Box>
        </Box>
    </Container>
  )
}
