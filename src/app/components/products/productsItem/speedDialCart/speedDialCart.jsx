import { SpeedDial, IconCart, IconCartOpen } from './speedDialCart.styled';
import { IconCartRemove } from './speedDialCart.styled';
import SpeedDialAction from '@mui/material/SpeedDialAction';

export default function SpeedDialCart({ handleCart, openCart }) {
  return (
    <SpeedDial ariaLabel="SpeedDial cart" icon={<IconCart />}>
      <SpeedDialAction
        icon={<IconCartRemove />}
        tooltipTitle="delete"
        onClick={handleCart}
      />
      <SpeedDialAction
        icon={<IconCartOpen />}
        tooltipTitle="cart"
        onClick={openCart}
      />
    </SpeedDial>
  );
}
