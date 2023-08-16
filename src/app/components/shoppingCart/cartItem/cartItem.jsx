import { useState } from 'react';
import Image from 'next/image';
import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
  Alert,
} from '@mui/material';
import { Popover } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function CartItem({ product, handleDelete }) {
  const [cartQuantity, setCartQuantity] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [alert, setAlert] = useState(false);

  const checkAvailability = (cartQuantity, available) => {
    cartQuantity > available ? setAlert(true) : setAlert(false);
  };

  const onDelete = e => {
    handleDelete(e.target.id);
    setAnchorEl(null);
  };

  const handleIncreaseQuantity = () => {
    setCartQuantity(cartQuantity + 1);
    checkAvailability(cartQuantity + 1, product.available);
  };

  const handleReduceQuantity = () => {
    cartQuantity === 1 ? setCartQuantity(1) : setCartQuantity(cartQuantity - 1);
    checkAvailability(cartQuantity - 1, product.available);
  };

  const handleChange = e => {
    const num = Number(e.target.value);
    if (!num) {
      setCartQuantity(1);
      return;
    }
    setCartQuantity(num);
    checkAvailability(num, product.available);
  };

  const handlePopoverOpen = e => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '100px',
          p: 1,
        }}
      >
        <Box sx={{ position: 'relative', width: '20%' }}>
          <Image
            src={product.images[0]}
            fill={true}
            alt="image"
            sizes="100%"
            priority="false"
          />
        </Box>

        <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{ pl: 1 }}>{product.title}</Typography>
            <IconButton onClick={handlePopoverOpen}>
              <MoreVertIcon sx={{ color: 'primary.light' }} />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Button
                id={product.id}
                variant="outlined"
                startIcon={<DeleteOutlineIcon />}
                onClick={onDelete}
              >
                Delete
              </Button>
            </Popover>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box id={product.id} sx={{ display: 'flex', height: '40px' }}>
              <IconButton onClick={handleReduceQuantity}>
                <RemoveIcon sx={{ color: 'primary.light' }} />
              </IconButton>
              <TextField
                size="small"
                sx={{ width: '60px' }}
                inputProps={{
                  style: { textAlign: 'center' },
                }}
                onChange={handleChange}
                value={cartQuantity}
              />
              <IconButton onClick={handleIncreaseQuantity} id={'button'}>
                <AddIcon sx={{ color: 'primary.light' }} />
              </IconButton>
            </Box>
            <Typography sx={{ fontWeight: '500', p: 1, color: 'primary.hot' }}>
              {product.price * cartQuantity}$
            </Typography>
          </Box>
        </Box>
      </Card>
      {alert && (
        <Alert severity="error" sx={{ mt: 1 }}>
          Unfortunately we do not have {cartQuantity} items in stock, we can
          offer you {product.available} items. If you need more contact us.
        </Alert>
      )}
    </>
  );
}
