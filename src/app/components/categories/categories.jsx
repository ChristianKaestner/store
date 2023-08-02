import { Box, Card, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import Link from 'next/link';

export default function Categories({ categories }) {
  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
      >
        {categories.map(category => {
          return (
            <Grid xs={6} key={category.id}>
              <Card
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: 200,
                  bgcolor: 'primary.main',
                  '&:hover': {
                    boxShadow: '0px 4px 17px 0px rgba(34, 60, 80, 0.5)',
                    '& .scaleImage': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Link
                  href="/"
                  style={{
                    textAlign: 'center',
                  }}
                >
                  <Image
                    className="scaleImage"
                    style={{
                      transition: 'transform 500ms ease-in-out',
                      objectFit: 'cover',
                    }}
                    src={category.image}
                    fill={true}
                    alt="image"
                    sizes="100%"
                    priority="false"
                  />
                  <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography sx={{ fontSize: 28, color: '#fff' }}>
                      {category.title}
                    </Typography>
                    <Typography sx={{ color: '#fff' }}>
                      {category.description}
                    </Typography>
                  </Box>
                </Link>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
