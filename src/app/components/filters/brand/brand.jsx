import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import FilterCommon from '../accordion/accordionCommon';
import { FormControl, TextField, Checkbox, Typography } from '@mui/material';
import { FormControlLabel, Box } from '@mui/material';
import { addAlphabetIndex, filterByInput } from '@/app/utils/functions';

export default function BrandFilter({ items }) {
  const [searchedBrand, setSearchedBrand] = useState('');
  const [debouncedBrand] = useDebounce(searchedBrand, 500);

  const brandsWithLetter = addAlphabetIndex(items);
  const filtredBrands = filterByInput(brandsWithLetter, debouncedBrand);

  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Brand">
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
        component="form"
      >
        <Box sx={{ pl: 2 }}>
          <TextField
            id="outlined"
            label="Brand name"
            type="search"
            size="small"
            value={searchedBrand}
            onChange={e => setSearchedBrand(e.target.value)}
          />
        </Box>

        <Box
          component="ul"
          sx={{
            flexWrap: 'nowrap',
            width: '100%',
            maxHeight: 400,
            overflowY: 'auto',
            overflowX: 'hidden',
            listStyle: 'none',
            mt: 2,
            pl: 2,
          }}
        >
          {items.length > 0 &&
            filtredBrands.map(({ id, brand, letter }) => {
              return (
                <Box key={id} component="li">
                  {letter && (
                    <Typography sx={{ fontWeight: 500 }}>{letter}</Typography>
                  )}
                  <FormControlLabel
                    control={
                      <Checkbox value={brand} sx={{ p: 1 }} size="small" />
                    }
                    label={brand}
                    onClick={handleChecked}
                    sx={{
                      width: '100%',
                      borderRadius: 1,
                      '&:hover': { bgcolor: 'primary.dim' },
                    }}
                  />
                </Box>
              );
            })}
        </Box>
      </FormControl>
    </FilterCommon>
  );
}
