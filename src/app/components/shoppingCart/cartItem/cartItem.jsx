import { useState } from 'react';
import Image from 'next/image';
import { Box, Button, Card, IconButton, TextField } from '@mui/material';
import { Popover, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function CartItem({
  product,
  increase,
  reduce,
  change,
  del,
  quantity,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const { id, title, images, price, available } = product;

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  const total = (quantity, price) => {
    if (isNaN(quantity) || quantity < 1 || quantity > available) {
      return price;
    }

    return quantity * price;
  };

  const onDelete = () => {
    del(id);
    setAnchorEl(null);
  };

  const onChange = e => {
    const value = e.target.value;
    change(id, value);
  };

  const handlePopoverOpen = e => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

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
            src={images[0]}
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
            <Typography sx={{ pl: 1 }}>{title}</Typography>
            <IconButton onClick={handlePopoverOpen}>
              <MoreVertIcon sx={{ color: 'primary.light' }} />
            </IconButton>
            <Popover
              id={popoverId}
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
                id={id}
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
            <Box id={id} sx={{ display: 'flex', height: '40px' }}>
              <IconButton
                onClick={() => reduce(id)}
                disabled={quantity <= 1 ? true : false}
                sx={{
                  color: 'primary.light',
                }}
              >
                <RemoveIcon />
              </IconButton>
              <TextField
                type="number"
                autoComplete="off"
                name="quantity"
                size="small"
                sx={{
                  width: '60px',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor:
                      quantity > available
                        ? 'primary.hot'
                        : 'rgba(0, 0, 0, 0.23)',
                  },
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor:
                        quantity > available ? 'primary.hot' : 'primary.light',
                    },
                  },
                }}
                inputProps={{
                  style: { textAlign: 'center' },
                }}
                onChange={onChange}
                value={quantity}
              />
              <IconButton
                onClick={() => increase({ id, available })}
                disabled={quantity >= available ? true : false}
                sx={{
                  color: 'primary.light',
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Typography sx={{ fontWeight: '500', p: 1, color: 'primary.hot' }}>
              {total(quantity, price)}$
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
}
