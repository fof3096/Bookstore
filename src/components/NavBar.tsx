import { AppBar, Box, Divider, InputBase, Link, Stack, Toolbar, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ mx: "auto", width: "100%", maxWidth: "1300px", py: 3 }}>
        <Typography
          variant="h3"
          component="div"
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
            <SearchIcon color="success"/>
          </Box>
        </Box>

        <Box sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: "center",
          gap: 2,
        }}>
          <Link py={1} color="secondary" sx={{ textDecoration: "none" }}>Acceder / Registrarme</Link>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ borderColor: "white" }}/>
          <Link py={1} color="secondary" sx={{ textDecoration: "none", display: "flex" }}>Lista de deseos <FavoriteIcon sx={{ ml: 1 }}/></Link>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ borderColor: "white" }}/>
          <Link py={1} color="secondary" sx={{ textDecoration: "none", display: "flex" }}>ARS$ 0,00 <ShoppingCartIcon sx={{ ml: 1 }}/></Link>
        </Box>
      </Toolbar>
      <Box bgcolor={"black"} py={1}>
        <Stack direction={"row"} alignItems={"center"} divider={<Divider orientation="vertical" variant="middle" sx={{ borderColor: "white", height: "1em" }}/>} color={"white"} spacing={1} maxWidth={"1300px"} mx={"auto"}>
          <Link color="inherit" sx={{ textDecoration: "none" }}>Libros</Link>
          <Link color="inherit" sx={{ textDecoration: "none" }}>Catálogo</Link>
          <Link color="inherit" sx={{ textDecoration: "none" }}>Ficció</Link>
          <Link color="inherit" sx={{ textDecoration: "none" }}>Top 100</Link>
          <Link color="inherit" sx={{ textDecoration: "none" }}>Locales</Link>
          <Link color="inherit" sx={{ textDecoration: "none" }}>Contacto </Link>
          <Link color="inherit" sx={{ textDecoration: "none" }}>Mi cuenta</Link>
        </Stack>
      </Box>
    </AppBar>
  )
}
