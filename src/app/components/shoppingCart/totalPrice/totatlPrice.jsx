import { Box, Button, Typography } from '@mui/material';

export default function TotalPrice({ total }) {
  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: 0,
        display: 'flex',
        justifyContent: 'end',
        width: '100%',
        alignItems: 'center',
        bgcolor: '#fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '240px',
          height: '64px',
          border: '1px solid #586ba4',
          borderRadius: '4px',
          bgcolor: 'primary.main',
          mr: 0.5,
        }}
      >
        <Typography sx={{ fontSize: 20, fontWeight: 500, color: '#fff' }}>
          {total}$
        </Typography>
        <Button variant="contained" sx={{ bgcolor: 'primary.light' }}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
}
