import { Box, Divider, Drawer, Typography } from '@mui/material';
import { List, ListItem } from '@mui/material';
import Link from 'next/link';

export default function DrawerMenu({ mobileOpen, handleDrawerToggle }) {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            My Shop
          </Typography>
          <Divider />
          <List sx={{ display: 'flex', flexDirection: 'column' }}>
            <ListItem>
              <Link href="/">Home</Link>
            </ListItem>

            <ListItem>
              <Link href="/products">Products</Link>
            </ListItem>

            <ListItem>
              <Link href="/contact">Contact</Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
