import Link from 'next/link';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { catSlug } from '@/app/utils/functions';

export default function ProductsItemModal({
  value,
  index,
  category,
  handleCloseModal,
}) {
  const { subCategory, name } = category;
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
          <Link href={name} onClick={handleCloseModal}>
            ALL {name.toUpperCase()}
          </Link>
          <Grid
            component="ul"
            container
            rowSpacing={{ xs: 2, sm: 2, md: 6 }}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
            sx={{ listStyle: 'none', mt: 2, justifyContent: 'center' }}
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
                    <Link href={catSlug(category, item)} target="_self">
                      <Image
                        src={item.image}
                        alt={`${item.name} logo`}
                        width={80}
                        height={80}
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
