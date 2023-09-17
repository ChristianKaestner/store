import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Box, TextField, Checkbox, Typography } from '@mui/material';
import { addAlphabetIndex, filterByInput } from '@/app/lib/functions';
import { ContainerFilter, Form, Label } from '@/app/lib/commonStyles';
import { debounce } from 'lodash';
import { visuallyHidden } from '@mui/utils';

export default function FlavorFilter({ items }) {
  const [searchedFlavor, setSearchedFlavor] = useState('');
  const [debouncedFlavor] = useDebounce(searchedFlavor, 500);

  const flavorsWithLetter = addAlphabetIndex(items, 'flavor');
  const filtredFlavors = filterByInput(
    flavorsWithLetter,
    debouncedFlavor,
    'flavor'
  );

  const { register, getValues } = useForm();

  const handleChecked = debounce(() => {
    // send request
    const values = getValues('flavor');
    console.log(values);
  }, 1000);

  return (
    <FilterCommon title="Flavors">
      <Typography component="h3" sx={visuallyHidden}>
        Search by flavor
      </Typography>
      <Form component="form">
        <Box sx={{ pl: 2 }}>
          <TextField
            id="outlined"
            label="Flavor name"
            type="search"
            size="small"
            value={searchedFlavor}
            {...register('flavorList', {
              onChange: e => setSearchedFlavor(e.target.value),
            })}
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
                      <Checkbox
                        value={flavor}
                        sx={{ p: 1 }}
                        size="small"
                        {...register('flavor', {
                          onChange: handleChecked,
                        })}
                      />
                    }
                    label={flavor}
                  />
                </Box>
              );
            })}
        </ContainerFilter>
      </Form>
    </FilterCommon>
  );
}
