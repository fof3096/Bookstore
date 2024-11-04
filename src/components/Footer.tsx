import { Box, Button, Container, Grid2, IconButton, Link, List, ListItem, Input, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer() {
  return (
    <Container disableGutters maxWidth={false} component={"footer"} sx={{ bgcolor: "#f0f0f0", px: 8, py: 15, mt: 30 }}>
        <Box mx={"auto"} maxWidth={1300} position={"relative"}>
            <Box bgcolor={"black"} px={8} py={4} borderRadius={5} position={"absolute"} top={"-90%"} display={"flex"} justifyContent={"space-between"}>
                <Typography flexBasis={"60%"} variant='h3' fontWeight={"bold"} color='secondary'>
                    Mantente actualizado sobre nuestras ofertas
                </Typography>
                <Box display={"flex"} flexDirection={"column"} flexBasis={"30%"} gap={2}>
                    <Input disableUnderline placeholder='Ingresa tu email' sx={{ flexBasis: "50%", bgcolor: "white", borderRadius: 5, fontSize:16 }} startAdornment={<MailOutlineIcon color='info' sx={{ ml: 1.8, mr: 1 }}/>}></Input>
                    <Button variant='contained' color='secondary' sx={{ flexBasis: "50%", bgcolor: "white", borderRadius: 5, fontSize:16,textTransform: "none" }}>Suscríbete al Boletin</Button>
                </Box>
            </Box>

            <Grid2 container borderBottom={1}>
                <Grid2 size={4} paddingRight={9}>
                    <Typography mb={1} variant='h4'>Name 📕</Typography>
                    <Typography mb={3} color='textSecondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
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
                    <Typography variant='h6'>COMPANY</Typography>
                    <List>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                    </List>
                </Grid2>
                <Grid2 size={2}>
                    <Typography variant='h6'>HELP</Typography>
                    <List>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                    </List>
                </Grid2>
                <Grid2 size={2}>
                    <Typography variant='h6'>FAQ</Typography>
                    <List>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                    </List>
                </Grid2>
                <Grid2 size={2}>
                    <Typography variant='h6'>RESOURCES</Typography>
                    <List>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                        <ListItem disableGutters>
                            <Link color='textSecondary' underline='none' href={"#"}>About</Link>
                        </ListItem>
                    </List>
                </Grid2>
            </Grid2>
            
            <Box>
                <Typography>Name © 2024, Todos los Derechos Reservados</Typography>
            </Box>
        </Box>
    </Container>
  )
}
