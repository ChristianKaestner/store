import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Box, TextField, Checkbox, Typography } from '@mui/material';
import { addAlphabetIndex, filterByInput } from '@/app/utils/functions';
import { ContainerFilter, Form, Label } from '@/app/utils/commonStyles';
import { useIsMount } from '@/app/hooks/useMount';

export default function FlavorFilter({ items }) {
  const [searchedFlavor, setSearchedFlavor] = useState('');
  const [checkedFlavor, setCheckedFlavor] = useState([]);
  const [debouncedFlavor] = useDebounce(searchedFlavor, 500);
  const [debouncedChecked] = useDebounce(checkedFlavor, 1500);

  const isMount = useIsMount();

  const flavorsWithLetter = addAlphabetIndex(items, 'flavor');
  const filtredFlavors = filterByInput(
    flavorsWithLetter,
    debouncedFlavor,
    'flavor'
  );

  const { register } = useForm();

  const handleChecked = ({ target }) => {
    if (target.checked) {
      setCheckedFlavor([...checkedFlavor, target.value]);
    }
    if (!target.checked) {
      const filtred = checkedFlavor.filter(flavor => flavor !== target.value);
      setCheckedFlavor(filtred);
    }
  };

  useEffect(() => {
    if (isMount) return;
    //update data by brand
    console.log(debouncedChecked);
  }, [debouncedChecked]);

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
