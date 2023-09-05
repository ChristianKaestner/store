import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import FilterCommon from '../accordion/accordionCommon';
import { FormControl, TextField, Checkbox, Typography } from '@mui/material';
import { FormControlLabel, Box } from '@mui/material';
import { addAlphabetIndex, filterByInput } from '@/app/utils/functions';

export default function FlavorFilter({ items }) {
  const [searchedFlavor, setSearchedFlavor] = useState('');
  const [debouncedFlavor] = useDebounce(searchedFlavor, 500);

  const flavorsWithLetter = addAlphabetIndex(items, 'flavor');
  const filtredFlavors = filterByInput(
    flavorsWithLetter,
    debouncedFlavor,
    'flavor'
  );

  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Flavors">
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
            label="Flavor name"
            type="search"
            size="small"
            value={searchedFlavor}
            onChange={e => setSearchedFlavor(e.target.value)}
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
            filtredFlavors.map(({ id, flavor, letter }) => {
              return (
                <Box key={id} component="li">
                  {letter && (
                    <Typography sx={{ fontWeight: 500 }}>{letter}</Typography>
                  )}
                  <FormControlLabel
                    control={
                      <Checkbox value={flavor} sx={{ p: 1 }} size="small" />
                    }
                    label={flavor}
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
