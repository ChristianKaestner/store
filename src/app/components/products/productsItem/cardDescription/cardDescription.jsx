import Link from 'next/link';
import { BsFillCartCheckFill, BsCart, BsCartXFill } from 'react-icons/bs';
import { CardContent, Box, Typography, IconButton } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function CardDescription({
  subTitle,
  title,
  price,
  isInCart,
  handleCart,
  onCart
}) {
  return (
    <CardContent>
      <Box>
        <Link href="/">
          <Typography sx={{ textAlign: 'center', mb: 1 }}>
            {subTitle}
          </Typography>
          <Typography
            sx={{
              height: 80,
              maxHeight: 80,
              overflow: 'hidden',
              fontSize: 18,
            }}
          >
            {title.toUpperCase()}
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 700, fontSize: 30, color: 'primary.hot' }}
        >
          {price}$
        </Typography>

        {isInCart ? (
          <Box>
            <SpeedDial
              ariaLabel="SpeedDial cart"
              sx={{ position: 'absolute', bottom: 0, right: -5 }}
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
                  <ShoppingCartIcon
                    sx={{ color: 'primary.accent', fontSize: 30 }}
                  />
                }
                tooltipTitle="cart"
                onClick={onCart}
              />
            </SpeedDial>
          </Box>
        ) : (
          <IconButton onClick={handleCart}>
            <AddShoppingCartIcon
              sx={{ color: 'primary.accent', fontSize: 30 }}
            />
          </IconButton>
        )}
      </Box>
    </CardContent>
  );
}
