import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: '#00b289',
          contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
          main: '#f2faff',
        },
    },
})

export default theme;