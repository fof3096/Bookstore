import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link as RouterLink } from "react-router-dom";

export default function BookCard({ title, authors, imageLink } : { title: string, authors: Array<string>, imageLink: string }) {
  return (
    <Card component={RouterLink} to={`tienda/${title}`} sx={{
        bgcolor: "transparent",
        borderRadius: 0,
        boxShadow: 0,
        height: "100%",
        maxWidth: "223px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textDecoration: "none"
      }}>
        <CardMedia
        component={"img"}
        src={imageLink}
        title="Portada de libro"
        sx={{ height: "55%", objectFit: "contain" }}
        >
        </CardMedia>

        <CardContent sx={{ pb: 0 }}>
            <Typography textAlign={"center"} fontSize={"small"} color="textSecondary" gutterBottom>{authors ? authors.join(", ").slice(0, 23).trim()+"..." : "TITLE F"}</Typography>
            <Typography lineHeight={1.2} fontSize={"medium"} textTransform={'uppercase'} textAlign={"center"} gutterBottom height={40}>{title.length > 30 ? title.slice(0, 27).trim()+"..." : title}</Typography>
            <Typography pl={1.5} gutterBottom>$ 87.999</Typography>
        </CardContent>

        <CardActions sx={{display: "flex", justifyContent: "center", pb: 0 }}>
            <Button size='small' disableElevation variant="contained" startIcon={<ShoppingBagIcon />}>AGREGAR AL CARRITO</Button>
        </CardActions>
    </Card>
  )
}
