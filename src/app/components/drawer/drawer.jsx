import { Box, Divider, Drawer, Typography } from '@mui/material';
import { List, ListItemButton } from '@mui/material';
import Link from 'next/link';

export default function DrawerMenu({ handleDrawerToggle }) {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Shop
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link href="/">Home</Link>
          </ListItemButton>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link href="/products">Products</Link>
          </ListItemButton>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link href="/contact">Contact</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
