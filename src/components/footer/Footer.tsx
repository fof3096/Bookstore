import { Box, Container, Grid2, IconButton, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PlaceIcon from '@mui/icons-material/Place';
import NewsLetter from './NewsLetter';
import FooterLinksColumn from './FooterLinksColumn';

const socialLinks = [
    { link: "https://www.instagram.com/", Icon: InstagramIcon },
    { link: "https://www.facebook.com/", Icon: FacebookIcon },
    { link: "https://www.whatsapp.com/?lang=es_LA", Icon: WhatsAppIcon },
    { link: "https://maps.app.goo.gl/nV5K18WoMbesc3RC8", Icon: PlaceIcon },
];

export default function Footer() {
  return (
    <Container disableGutters maxWidth={false} component={"footer"} sx={{ bgcolor: "#f0f0f0", px: 8, py: 15, mt: 20 }}>
        <Box mx={"auto"} maxWidth={1300} position={"relative"}>
            <NewsLetter />

            <Grid2 container borderBottom={1} minHeight={209}>
                <Grid2 size={4} paddingRight={9}>
                    <Typography mb={1} variant='h4'>Bull Terrier</Typography>
                    <Typography mb={3} color='textSecondary'>Descubre un universo de historias, conocimiento e inspiración en nuestra librería. Nos apasiona fomentar la lectura y ofrecer una amplia variedad de libros para todas las edades y gustos.</Typography>
                    <Stack direction={"row"} spacing={1}>
                        {
                            socialLinks.map(({link, Icon}, i)=>(
                                <IconButton key={i} href={link} target='_blank' rel="noopener noreferrer" size='small' sx={{ boxShadow: 1 }}>
                                    <Icon sx={{ fontSize: 18 }}/>
                                </IconButton>
                            ))
                        }
                    </Stack>
                </Grid2>

                <FooterLinksColumn title='NOSOTROS' items={["Locales en la Provincia", "Trabajar con Nosotros", "Política de Privacidad"]} />
                <FooterLinksColumn title='AYUDA' items={["Demora de Envíos", "Devoluciones", "Medios de Pago"]} />
                <FooterLinksColumn title='COMPRAS' items={["Promociones Locales", "Costo de Envíos", "Cancelación de Compra"]} />
            </Grid2>
            
            <Box>
                <Typography color='textSecondary'>Bull Terrier © 2024, Todos los Derechos Reservados</Typography>
            </Box>
        </Box>
    </Container>
  )
}
