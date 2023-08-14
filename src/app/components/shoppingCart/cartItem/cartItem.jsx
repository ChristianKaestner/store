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

export default function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [alert, setAlert] = useState(false);

  const checkAvailability = (quantity, total) => {
    quantity > total ? setAlert(true) : setAlert(false);
  };

  const handleDelete = () => {
    setAnchorEl(null);
  };

  const handleIncrement = e => {
    setQuantity(quantity + 1);
    checkAvailability(quantity + 1, product.quantity);
  };

  const handleDecrement = () => {
    quantity === 1 ? setQuantity(1) : setQuantity(quantity - 1);
    checkAvailability(quantity - 1, product.quantity);
  };

  const handleChange = e => {
    const num = Number(e.target.value);
    if (!num) {
      setQuantity(1);
      return;
    }
    setQuantity(num);
    checkAvailability(num, product.quantity);
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
                variant="outlined"
                startIcon={<DeleteOutlineIcon />}
                onClick={handleDelete}
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
              <IconButton onClick={handleDecrement}>
                <RemoveIcon sx={{ color: 'primary.light' }} />
              </IconButton>
              <TextField
                size="small"
                sx={{ width: '60px' }}
                inputProps={{
                  style: { textAlign: 'center' },
                }}
                onChange={handleChange}
                value={quantity}
              />
              <IconButton onClick={handleIncrement} id={'button'}>
                <AddIcon sx={{ color: 'primary.light' }} />
              </IconButton>
            </Box>
            <Typography sx={{ fontWeight: '500', p: 1, color: 'primary.hot' }}>
              {product.price}$
            </Typography>
          </Box>
        </Box>
      </Card>
      {alert && (
        <Alert severity="error">
          Unfortunately this quantity is not available, you can order a maximum
          of {product.quantity}
        </Alert>
      )}
    </>
  );
}
