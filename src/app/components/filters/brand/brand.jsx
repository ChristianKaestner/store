import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import FilterCommon from '../common/filterCommon';
import { FormControl, TextField, Checkbox, Typography } from '@mui/material';
import { FormControlLabel, FormGroup, Box } from '@mui/material';
import { addAlphabetIndex, filterByInput } from '@/app/utils/functions';
import { brands } from '@/app/utils/tmpData';

export default function BrandFilter() {
  const [searchedBrand, setSearchedBrand] = useState('');
  const [debouncedBrand] = useDebounce(searchedBrand, 500);

  const brandsWithLetter = addAlphabetIndex(brands);
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
        <TextField
          id="outlined"
          label="Brand name"
          type="search"
          size="small"
          value={searchedBrand}
          onChange={e => setSearchedBrand(e.target.value)}
        />
        <FormGroup
          component="ul"
          sx={{
            flexWrap: 'nowrap',
            width: '100%',
            height: 400,
            overflowY: 'auto',
            overflowX: 'hidden',
            listStyle: 'none',
            mt: 2,
            pl: 2,
          }}
        >
          {brands.length &&
            filtredBrands.map(({ id, name, letter }) => {
              return (
                <Box key={id} component="li">
                  {letter && (
                    <Typography sx={{ fontWeight: 500 }}>{letter}</Typography>
                  )}
                  <FormControlLabel
                    control={<Checkbox value={name} sx={{ p: 1 }} />}
                    label={name}
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
        </FormGroup>
      </FormControl>
    </FilterCommon>
  );
}
