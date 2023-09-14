import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import AccountAside from './sideBar/sideBar';

export default function PersonalAccount() {
  const [value, setValue] = useState(0);

  //   const handleChange = index => {
  //     setValue(index);
  //   };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', height: '500px' }}>
      <AccountAside handleChange={index => setValue(index)} value={value} />
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
        <AccountInfo name="Vladyslav Rohalov" email="example@email.com" />
        <Tabs
          orientation="vertical"
          component="nav"
          variant="scrollable"
          value={value}
          aria-label="Personal account menu"
          sx={{
            borderRight: 1,
            borderColor: 'transparent',
          }}
        >
          <Tab
            sx={{
              alignItems: 'start',
              mb: 2,
              borderRadius: 1,
              '&:hover': { bgcolor: 'primary.dim' },
            }}
            label={
              <Row>
                <ManageAccountsIcon sx={{ fontSize: '1.7rem' }} />
                <Typography sx={{ ml: 2, fontSize: '1.2rem', fontWeight: 500 }}>
                  Account settings
                </Typography>
              </Row>
            }
            onClick={handleChange.bind(this, 0)}
          />
          <Tab
            sx={{
              alignItems: 'start',
              mb: 2,
              borderRadius: 1,
              '&:hover': { bgcolor: 'primary.dim' },
            }}
            label={
              <Row>
                <ShoppingCartOutlinedIcon sx={{ fontSize: '1.7rem' }} />
                <Typography sx={{ ml: 2, fontSize: '1.2rem', fontWeight: 500 }}>
                  My purchases
                </Typography>
              </Row>
            }
            onClick={handleChange.bind(this, 1)}
          />

          <Tab
            sx={{
              alignItems: 'start',
              mb: 2,
              borderRadius: 1,
              '&:hover': { bgcolor: 'primary.dim' },
            }}
            label={
              <Row>
                <FavoriteIcon sx={{ fontSize: '1.7rem' }} />
                <Typography sx={{ ml: 2, fontSize: '1.2rem', fontWeight: 500 }}>
                  My Favorites
                </Typography>
              </Row>
            }
            onClick={handleChange.bind(this, 2)}
          />

          <Tab
            sx={{
              alignItems: 'start',
              mb: 2,
              borderRadius: 1,
              '&:hover': { bgcolor: 'primary.dim' },
            }}
            label={
              <Row>
                <CreateIcon sx={{ fontSize: '1.7rem' }} />
                <Typography sx={{ ml: 2, fontSize: '1.2rem', fontWeight: 500 }}>
                  My Reviews
                </Typography>
              </Row>
            }
            onClick={handleChange.bind(this, 3)}
          />
        </Tabs>
      </Box> */}
      <Box sx={{ ml: 8 }}>
        <Box>{value === 0 && <Typography>1</Typography>}</Box>
        <Box>{value === 1 && <Typography>2</Typography>}</Box>
        <Box>{value === 2 && <Typography>3</Typography>}</Box>
        <Box>{value === 3 && <Typography>4</Typography>}</Box>
      </Box>
      {/* <AccountAside name="Vladyslav Rohalov" email="example@email.com" />
      <AccountMain /> */}
    </Box>
  );
}
