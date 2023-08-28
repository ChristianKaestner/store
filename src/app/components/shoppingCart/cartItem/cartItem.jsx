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
  const { id, title, images, price, available } = product;

  const [anchorEl, setAnchorEl] = useState(null);

  const onDelete = () => {
    del(id);
    setAnchorEl(null);
  };

  const onChange = e => {
    const num = Number(e.target.value);
    change(id, num, available);
  };

  const handlePopoverOpen = e => {
    setAnchorEl(e.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const popoverId = open ? 'simple-popover' : undefined;

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
              <IconButton onClick={() => reduce(id)}>
                <RemoveIcon sx={{ color: 'primary.light' }} />
              </IconButton>
              <TextField
                type="text"
                size="small"
                sx={{ width: '60px' }}
                inputProps={{
                  style: { textAlign: 'center' },
                }}
                onChange={onChange}
                value={quantity}
              />
              <IconButton
                onClick={() => increase({ id, available })}
                id={'button'}
              >
                <AddIcon sx={{ color: 'primary.light' }} />
              </IconButton>
            </Box>
            <Typography sx={{ fontWeight: '500', p: 1, color: 'primary.hot' }}>
              {price * quantity}$
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
}
