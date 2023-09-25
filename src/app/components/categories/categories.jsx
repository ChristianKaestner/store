import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { visuallyHidden } from '@mui/utils';
import { Card } from './categories.styled';

export default function Categories({ categories }) {
  return (
    <Box sx={{ width: '100%', my: 4 }} component="section">
      <Typography component="h2" sx={visuallyHidden}>
        Best hookah price, top quality tobaссko, excelent coal & more
      </Typography>
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 3 }}
        columnSpacing={{ xs: 2, sm: 2, md: 3 }}
        component="ul"
        sx={{ listStyle: 'none' }}
      >
        {categories.map(category => {
          return (
            <Grid xs={6} key={category.id} component="li">
              <Link href={category.name.toLowerCase()}>
                <Card>
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
                  />
                  <Box sx={{ zIndex: 2 }}>
                    <Typography
                      component="h3"
                      sx={{ fontSize: 28, color: '#fff' }}
                    >
                      {category.name.toUpperCase()}
                    </Typography>
                  </Box>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
