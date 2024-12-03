import { Grid2, Link, List, ListItem, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


export default function FooterLinksColumn({ title, items } : {title: string, items: Array<string>}) {
  return (
    <Grid2 size={2}>
        <Typography variant='h6'>{title}</Typography>
        <List>
            {
                items.map((item, i)=>(
                    <ListItem key={i} disableGutters>
                        <Link component={RouterLink} to={`tienda/${item}`} color='textSecondary' underline='none'>{item}</Link>
                    </ListItem>
                ))
            }
        </List>
    </Grid2>
  )
}
