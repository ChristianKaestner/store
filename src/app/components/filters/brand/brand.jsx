import { useState } from 'react';
// import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import FilterCommon from '../accordion/accordionCommon';
import { Box, TextField, Checkbox, Typography } from '@mui/material';
import { addAlphabetIndex, filterByInput } from '@/app/utils/functions';
import { Counter } from './brand.styled';
import { Form, Label, ContainerFilter } from '@/app/utils/commonStyles';

export default function BrandFilter({ items }) {
  const [searchedBrand, setSearchedBrand] = useState('');
  const [debouncedBrand] = useDebounce(searchedBrand, 500);

  const brandsWithLetter = addAlphabetIndex(items, 'brand');
  const filtredBrands = filterByInput(
    brandsWithLetter,
    debouncedBrand,
    'brand'
  );

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   mode: 'onSubmit',
  // });

  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Brand">
      <Form component="form">
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

        <ContainerFilter component="ul">
          {items.length > 0 &&
            filtredBrands.map(({ id, brand, letter, count }) => {
              return (
                <Box key={id} component="li">
                  {letter && (
                    <Typography sx={{ fontWeight: 500 }}>{letter}</Typography>
                  )}
                  <Label
                    control={
                      <Checkbox value={brand} sx={{ p: 1 }} size="small" />
                    }
                    label={
                      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Counter badgeContent={count}>
                          <Typography>{brand}</Typography>
                        </Counter>
                      </Box>
                    }
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
