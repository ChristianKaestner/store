import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function SpeedDialCart({ handleCart, openCart }) {
  return (
    <SpeedDial
      ariaLabel="SpeedDial cart"
      sx={{ position: 'absolute', bottom: 0, right: -5, zIndex: 1 }}
      icon={
        <ShoppingCartCheckoutIcon
          sx={{ color: 'primary.accent', fontSize: 30 }}
        />
      }
    >
      <SpeedDialAction
        icon={
          <RemoveShoppingCartIcon
            sx={{ color: 'primary.accent', fontSize: 30 }}
          />
        }
        tooltipTitle="delete"
        onClick={handleCart}
      />
      <SpeedDialAction
        icon={
          <ShoppingCartIcon sx={{ color: 'primary.accent', fontSize: 30 }} />
        }
        tooltipTitle="cart"
        onClick={openCart}
      />
    </SpeedDial>
  );
}
