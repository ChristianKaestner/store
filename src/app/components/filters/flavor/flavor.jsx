import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import FilterCommon from '../accordion/accordionCommon';
import { Box, TextField, Checkbox, Typography } from '@mui/material';
import { addAlphabetIndex, filterByInput } from '@/app/utils/functions';
import { ContainerFilter, Form, Label } from '@/app/utils/commonStyles';

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
      <Form component="form">
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

        <ContainerFilter component="ul">
          {items.length > 0 &&
            filtredFlavors.map(({ id, flavor, letter }) => {
              return (
                <Box key={id} component="li">
                  {letter && (
                    <Typography sx={{ fontWeight: 500 }}>{letter}</Typography>
                  )}
                  <Label
                    control={
                      <Checkbox value={flavor} sx={{ p: 1 }} size="small" />
                    }
                    label={flavor}
                    onClick={handleChecked}
                  />
                </Box>
              );
            })}
        </ContainerFilter>
      </Form>
    </FilterCommon>
  );
}
