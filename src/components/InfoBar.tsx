import { Box, Divider, Stack, Typography } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function InfoBar() {
  return (
    <Stack p={2} direction={"row"} justifyContent={"space-evenly"} divider={<Divider orientation="vertical" flexItem sx={{ borderColor: "text.Secondary" }}/>}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <StorefrontIcon color="secondary"/>
        <Stack spacing={-1}>
          <Typography color="secondary" fontWeight={"bold"}>RETIRO GRATIS</Typography>
          <Typography color="textSecondary" fontSize={"small"} >en sucursal</Typography>
        </Stack>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={1}>
        <LocalShippingOutlinedIcon color="secondary"/>
        <Stack spacing={-1}>
          <Typography color="secondary" fontWeight={"bold"}>ENVÍOS A DOMICIOLIO</Typography>
          <Typography color="textSecondary" fontSize={"small"}>en toda la provincia</Typography>
        </Stack>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={1}>
        <CreditCardIcon color="secondary"/>
        <Stack spacing={-1}>
          <Typography color="secondary" fontWeight={"bold"}>PROMOS A BANCARIAS</Typography>
          <Typography color="textSecondary" fontSize={"small"}>y medios de pago</Typography>
        </Stack>
      </Box>

      <Box display={"flex"} alignItems={"center"} gap={1}>
        <WhatsAppIcon color="secondary"/>
        <Stack spacing={-1}>
          <Typography color="secondary" fontWeight={"bold"}>223 3393007</Typography>
          <Typography color="textSecondary" fontSize={"small"}>consultanos</Typography>
        </Stack>
      </Box>
    </Stack>
  )
}
