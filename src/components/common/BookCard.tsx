import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from '../../redux/states/user.state';
import { Book } from '../../interfaces/Book';

export default function BookCard(bookData : Book) {
  const dispatch = useDispatch();

  const handlerBookCart = () => {
    dispatch(addProduct(bookData))
  }

  return (
    <Card component={RouterLink} to={`tienda/${bookData.title}`} sx={{
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
        src={bookData.imageLink}
        title="Portada de libro"
        sx={{ height: "55%", objectFit: "contain" }}
        >
        </CardMedia>

        <CardContent sx={{ pb: 0 }}>
            <Typography textAlign={"center"} fontSize={"small"} color="textSecondary" gutterBottom>{bookData.authors ? bookData.authors.join(", ").slice(0, 23).trim()+"..." : "NOT FOUNDED"}</Typography>
            <Typography lineHeight={1.2} fontSize={"medium"} textTransform={'uppercase'} textAlign={"center"} gutterBottom height={40}>{bookData.title.length > 30 ? bookData.title.slice(0, 27).trim()+"..." : bookData.title}</Typography>
            <Typography pl={1.5} gutterBottom>{bookData.price}</Typography>
        </CardContent>

        <CardActions sx={{display: "flex", justifyContent: "center", pb: 0 }}>
            <Button onClick={handlerBookCart} size='small' disableElevation variant="contained" startIcon={<ShoppingBagIcon />}>AGREGAR AL CARRITO</Button>
        </CardActions>
    </Card>
  )
}
