import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { Box, Button, IconButton } from '@mui/material';
import { Popover, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { InputProps, Column, RowBetween } from '../../../lib/commonStyles';
import { Card } from './cartItem.styled';

export default function CartItem({ product, increase, reduce, change, del }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const { id, title, images, price, available, quantity } = product;

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  const total = (quantity, price) => {
    if (isNaN(quantity) || quantity < 1 || quantity > available) {
      return price.toFixed(2);
    }
    return (quantity * price).toFixed(2);
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
      <Card>
        <Box sx={{ position: 'relative', width: '20%', borderRadius: 4 }}>
          <Image
            src={images[0]}
            fill={true}
            alt="image"
            sizes="100%"
            priority="false"
            style={{ borderRadius: 4 }}
          />
        </Box>

        <Column sx={{ width: '80%', ml: 2 }}>
          <RowBetween>
            <Typography sx={{ color: 'primary.dim', pl: 1 }}>
              {title}
            </Typography>
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
                sx={{
                  bgcolor: 'primary.neutral',
                  color: 'primary.dim',
                  '&:hover': {
                    bgcolor: 'primary.neutral',
                    color: 'primary.hot',
                    borderColor: 'primary.light',
                  },
                }}
              >
                Delete
              </Button>
            </Popover>
          </RowBetween>

          <RowBetween sx={{ alignItems: 'center' }}>
            <Box id={id} sx={{ display: 'flex', height: '40px' }}>
              <IconButton
                onClick={() => reduce(id)}
                disabled={quantity <= 1 ? true : false}
                sx={{
                  color: 'primary.light',
                  '&:disabled': { color: 'primary.neutral' },
                }}
              >
                <RemoveIcon />
              </IconButton>
              <InputProps
                type="number"
                err={quantity > available}
                autoComplete="off"
                name="quantity"
                size="small"
                sx={{
                  width: '60px',
                }}
                inputProps={{
                  style: { textAlign: 'center' },
                }}
                {...register('quantity', {
                  onChange: onChange,
                })}
                value={quantity}
              />
              <IconButton
                onClick={() => increase({ id, available })}
                disabled={quantity >= available ? true : false}
                sx={{
                  color: 'primary.light',
                  '&:disabled': { color: 'primary.neutral' },
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Typography
              sx={{ fontWeight: '500', p: 1, color: 'primary.accent' }}
            >
              {total(quantity, price)}$
            </Typography>
          </RowBetween>
        </Column>
      </Card>
    </>
  );
}
