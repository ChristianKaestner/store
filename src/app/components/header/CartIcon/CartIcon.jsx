import { IconButton } from '@mui/material';
import { Badge } from './cartIcon.styled';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function CartIcon({ onOpenCartModal, totalProducts }) {
  return (
    <IconButton
      color="inherit"
      aria-label="shoping cart"
      sx={{ display: { xs: 'none', sm: 'flex' } }}
      onClick={onOpenCartModal}
    >
      <Badge badgeContent={totalProducts}>
        <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
      </Badge>
    </IconButton>
  );
}
