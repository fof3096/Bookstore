import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';


export default function BookCard() {
  return (
    <Card sx={{ bgcolor: "transparent", borderRadius: 0, boxShadow: 0, height: "100%", alignContent: "center", maxWidth: "223px"}}>
        <CardMedia
        component={"img"}
        src="https://ventadelibros.com.ar/wp-content/uploads/2024/08/9788419275202-600x960.jpg"
        title="Portada de libro"
        sx={{ height: "55%", objectFit: "contain"}}
        >
        </CardMedia>

        <CardContent sx={{ pb: 0 }}>
            <Typography textAlign={"center"} fontSize={"small"} color="textSecondary" gutterBottom>Rowling, Joanne K.</Typography>
            <Typography textAlign={"center"} gutterBottom>HARRY POTTER Y EL PRISIONERO DE...</Typography>
            <Typography pl={1}>$ 87.999</Typography>
        </CardContent>

        <CardActions sx={{display: "flex", justifyContent: "center"}}>
            <Button size='small' disableElevation variant="contained" startIcon={<ShoppingBagIcon />}>AGREGAR AL CARRITO</Button>
        </CardActions>
    </Card>
  )
}
