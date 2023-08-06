import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function ProductsItemModal({
  value,
  index,
  category,
  subCategory,
}) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{
        width: { xs: '50%', sm: '70%', md: '80%', lg: '85%' },
      }}
    >
      {value === index && (
        <Box sx={{ ml: 2, mt: 1.5, textAlign: 'center' }}>
          <Link href={category.uri}>ALL {category.name.toUpperCase()}</Link>
          <Grid
            component="ul"
            container
            rowSpacing={{ xs: 2, sm: 2, md: 3 }}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
            sx={{ listStyle: 'none', mt: 2 }}
          >
            {subCategory &&
              subCategory.map(item => {
                return (
                  <Grid
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    key={item.id}
                    component="li"
                    sx={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <Link href={item.uri}>
                      <Image
                        src={item.logo}
                        alt={`${item.name} logo`}
                        width={100}
                        height={100}
                      />
                      <Typography>{item.name}</Typography>
                    </Link>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      )}
    </Box>
  );
  
}
