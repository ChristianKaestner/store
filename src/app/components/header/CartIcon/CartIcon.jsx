import { IconButton, Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function CartIcon({ onOpenCartModal, totalProducts }) {
  return (
    <IconButton
      color="inherit"
      aria-label="shoping cart"
      sx={{ display: { xs: 'none', sm: 'flex' } }}
      onClick={onOpenCartModal}
    >
      <Badge
        badgeContent={1}
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
