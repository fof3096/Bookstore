import { AppBar, Box, Button, Divider, InputBase, Link, Menu, Stack, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const titles = ["Libros", "Catálogo", "Novedades", "Ficción", "Locales"]
const links = ["/tienda", "/categorías", "/tienda?ordenby=date", "/tienda?category=ficcion", "/locales"]

export default function NavBar() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLAnchorElement>(null)

  const isOpen = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position="static" sx={{ boxShadow: 0}}>
      <Toolbar sx={{ mx: "auto", width: "100%", maxWidth: "1300px", py: 3 }}>
        <Typography
          color="primary.contrastText"
          variant="h3"
          component={RouterLink}
          to={"/"}
          sx={{ textDecoration: "none" }}
        >
          BullTerrier
        </Typography>

        <Box component={"div"} sx={{
          display: "flex",
          position: "relative",
          mx: 4,
          flexGrow: 1,
          bgcolor: "#f7f7f7",
          borderRadius: 1.5
        }}>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ pl: ".5em", width: "100%" }}
          />
          
          <Box component={"div"} sx={{
            height: '100%',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            right: ".5em",
          }}>
            <SearchIcon color="secondary"/>
          </Box>
        </Box>

        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: "center",
          gap: 2,
        }}>
          <Link py={1} color="primary.contrastText" component={RouterLink} to={"/cuenta"} sx={{ textDecoration: "none", textTransform: "none" }}>Acceder / Registrarme</Link>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ borderColor: "white" }}/>
          <Link py={1} color="primary.contrastText" component={RouterLink} to={"/lista de deseos"} sx={{ textDecoration: "none", display: "flex" }}>Lista de deseos <FavoriteIcon sx={{ ml: 1 }}/></Link>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ borderColor: "white" }}/>
          <Link
            component={RouterLink}
            id="basic-button"
            aria-controls={isOpen ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : undefined}
            to={"/carrito"}
            onClick={handleClick}
            sx={{ textDecoration: "none", display: "flex", color: "primary.contrastText" }}
          >
            ARS$ 0,00 <ShoppingCartIcon sx={{ ml: 1 }}/>
          </Link>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{
              "& .MuiPaper-root": {
                overflow: "visible",
              },
              mt: 1
            }}
          >
            <Box position={"absolute"} zIndex={60} bgcolor={"Background"} top={"-5px"} left={"20%"} width={10} height={10} sx={{ transform: "rotate(45deg)" }}></Box>
            <Box py={0} p={3} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={3} position={"relative"}>
              <ShoppingBagIcon sx={{ color: "text.disabled", fontSize: 80 }}/>
              <Typography color="textSecondary">No hay productos en el carrito.</Typography>
              <Button disableElevation variant="contained" sx={{ fontWeight: "bold" }}>VOLVER A LA TIENDA</Button>
            </Box>
          </Menu>
        </Box>
      </Toolbar>

      <Box bgcolor={"secondary.main"} py={1}>
        <Stack direction={"row"} alignItems={"center"} divider={<Divider orientation="vertical" variant="middle" sx={{ borderColor: "white", height: "1em" }}/>} color={"white"} spacing={1} maxWidth={"1300px"} mx={"auto"}>
        {
          titles.map((title, i)=>(
            <Link key={i} component={RouterLink} to={links[i]} color="secondary.contrastText" sx={{ textDecoration: "none" }}>{title}</Link>
          ))
        }
        </Stack>
      </Box>
    </AppBar>
  )
}
