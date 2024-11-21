import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#EB8317',
        contrastText: '#F4F6FF',
      },
      secondary: {
        main: '#000000',
      },
      background: {
        default: '#fff',
      },
    },
})

export default theme;