import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { catSlug } from '../../../../lib/functions.js';

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
        ml: 2,
        mt: 2,
        width: '100%',
        // width: { xs: '50%', sm: '70%', md: '80%', lg: '85%' },
      }}
    >
      <Link
        href={name}
        onClick={handleCloseModal}
        style={{ textAlign: 'center' }}
      >
        <Typography
          sx={{
            color: 'primary.dim',
            fontWeight: 500,
            fontSize: '1.5rem',
            '&:hover': {
              color: 'primary.accent',
              textDecoration: 'underline',
            },
          }}
        >
          ALL {name.toUpperCase()}
        </Typography>
      </Link>
      {value === index && (
        <Box
          component="ul"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'start',
            gap: 4,
            listStyle: 'none',
            mt: 2,
            height: '88%',
          }}
        >
          {subCategory &&
            subCategory.map(item => {
              return (
                <Box component="li" key={item.id}>
                  <Link href={catSlug(category, item)} target="_self">
                    <Typography
                      sx={{
                        color: 'primary.dim',
                        fontSize: '1.25rem',
                        '&:hover': {
                          color: 'primary.accent',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                </Box>
              );
            })}
        </Box>
      )}
    </Box>
  );
}
