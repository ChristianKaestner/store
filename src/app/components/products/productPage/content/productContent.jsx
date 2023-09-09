'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { toggleAccount, toggleCart } from '@/app/redux/modal/slice';
import { cartAdd } from '@/app/redux/cart/slice';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import { Radio, RadioGroup, Button, Rating } from '@mui/material';
import { FormControlLabel, FormControl, FormLabel } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductContent({ product, isLogin }) {
  const {
    brand,
    title,
    description,
    colors,
    price,
    status,
    id,
    rating,
    reviews,
  } = product;
  const [isFavorite, setIsFavorite] = useState(false);
  const [color, setColor] = useState(colors.length ? colors[0] : null);

  const dispatch = useDispatch();

  const handleColorChange = e => {
    setColor(e.target.value);
  };

  const handleFavorite = () => {
    if (!isLogin) {
      dispatch(toggleAccount(true));
      return;
    }
    setIsFavorite(!isFavorite);
  };

  const handleCart = () => {
    //need to transmit current color to cart
    dispatch(cartAdd(id));
    dispatch(toggleCart(true));
  };

  return (
    <Box>
      <Paper elevation={5} sx={{ p: 2 }}>
        <Typography component="h1" sx={{ fontWeight: 500, fontSize: 32 }}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Rating name="read-only" value={rating} readOnly />
            <Link href="reviews">
              <Typography
                sx={{
                  color: 'primary.light',
                  ml: 1,
                  '&:hover': {
                    color: 'primary.accent',
                    textDecoration: 'underline',
                  },
                }}
              >
                {reviews.length} reviews
              </Typography>
            </Link>
          </Box>
          <Typography sx={{ pr: 1, color: 'primary.neutral' }}>
            Code: {id}
          </Typography>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography component="h2" sx={{ fontWeight: 400 }}>
            <Box component="span" sx={{ fontWeight: 500 }}>
              Brand:
            </Box>{' '}
            {brand}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            my: 2,
            alignItems: 'center',
          }}
        >
          {colors && (
            <FormControl onChange={handleColorChange}>
              <FormLabel
                id="color-radio-button-label"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 1,
                  mb: 2,
                  cursor: 'text',
                  textTransform: 'capitalize',
                }}
              >
                <Box
                  component="span"
                  sx={{ fontWeight: 500, color: 'primary.text' }}
                >
                  Color:
                </Box>
                <Typography color="#000000"> {color}</Typography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="color-radio-button-label"
                defaultValue={colors[0]}
                name="color"
                sx={{ display: 'flex', flexDirection: 'row' }}
              >
                {colors.map(color => {
                  return (
                    <FormControlLabel
                      key={color}
                      value={color}
                      control={
                        <Radio
                          icon={
                            <CircleIcon
                              fontSize="small"
                              style={{
                                stroke: '#747474',
                                fill: color,
                              }}
                            />
                          }
                          checkedIcon={
                            <CheckCircleIcon
                              fontSize="small"
                              style={{
                                stroke:
                                  color === 'white' ? '#747474' : 'transparent',
                                fill: color,
                              }}
                            />
                          }
                        />
                      }
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          )}
        </Box>
        <Box>
          <Typography component="h3" sx={{ fontWeight: 400 }}>
            <Box
              component="span"
              sx={{ fontWeight: 500, color: 'primary.text' }}
            >
              Description:
            </Box>{' '}
            {description}
          </Typography>
        </Box>
      </Paper>

      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'row',
          mt: 4,
          p: 2,
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            component="h4"
            sx={{ fontWeight: 700, fontSize: 30, color: 'primary.hot' }}
          >
            {price}$
          </Typography>
          <Typography
            sx={{ fontWeight: 500, fontSize: 16, color: 'primary.light' }}
          >
            {status}
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          sx={{ width: 160, height: 40, bgcolor: 'primary.light', mx: 4 }}
          onClick={handleCart}
        >
          Buy
        </Button>
        <IconButton onClick={handleFavorite}>
          {isFavorite ? (
            <FavoriteOutlinedIcon
              sx={{ color: 'primary.accent', fontSize: 30 }}
            />
          ) : (
            <FavoriteBorderOutlinedIcon
              sx={{ fontSize: 30, color: 'primary.accent' }}
            />
          )}
        </IconButton>
      </Paper>
    </Box>
  );
}
