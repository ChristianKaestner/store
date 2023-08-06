import { IconButton, Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function ShoppingCart() {
  return (
    <IconButton
      color="inherit"
      aria-label="shoping cart"
      sx={{ display: { xs: 'none', sm: 'flex' } }}
    >
      <Badge
        badgeContent={4}
        sx={{
          '& .MuiBadge-badge': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
      </Badge>
    </IconButton>
  );
}
