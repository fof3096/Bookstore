import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#EB8317',
        contrastText: '#F4F6FF',
      },
      secondary: {
        main: '#10375C',
      },
      background: {
        default: '#F4F6FF',
      },
    },
})

export default theme;