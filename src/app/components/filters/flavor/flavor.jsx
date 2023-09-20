import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getSearchParams } from '@/app/lib/functions';
import { useDebounce } from 'use-debounce';
import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Box, TextField, Checkbox, Typography } from '@mui/material';
import { addAlphabetIndex, filterByInput } from '@/app/lib/functions';
import { ContainerFilter, Form, Label } from '@/app/lib/commonStyles';
// import { debounce } from 'lodash';
import { visuallyHidden } from '@mui/utils';

export default function FlavorFilter({ items }) {
  const [searchedFlavor, setSearchedFlavor] = useState('');
  const [debouncedFlavor] = useDebounce(searchedFlavor, 500);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsFlavor = getSearchParams(searchParams, 'flavor');

  const flavorsWithLetter = addAlphabetIndex(items, 'flavor');
  const filtredFlavors = filterByInput(
    flavorsWithLetter,
    debouncedFlavor,
    'flavor'
  );

  const { register, getValues } = useForm();

  const handleChecked = e => {
    const value = e.currentTarget.value.toLowerCase();
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const flavors = current.get('flavor');

    if (flavors) {
      const flavorArray = flavors.split(',');

      if (flavorArray.includes(value)) {
        flavorArray.splice(flavorArray.indexOf(value), 1);
      } else {
        flavorArray.push(value);
      }

      if (flavorArray.length > 0) {
        current.set('flavor', flavorArray.join(','));
      } else {
        current.delete('flavor');
      }
    } else {
      current.set('flavor', value);
    }

    const search = decodeURIComponent(current.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
    // send request
    const values = getValues('flavor');
    console.log(values);
  };

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
              let checked = false;
              const flavorMod = flavor.toLowerCase();

              if (paramsFlavor.includes(flavorMod)) {
                checked = true;
              }
              return (
                <Box key={id} component="li">
                  {letter && (
                    <Typography sx={{ fontWeight: 500 }}>{letter}</Typography>
                  )}
                  <Label
                    control={
                      <Checkbox
                        checked={checked}
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
