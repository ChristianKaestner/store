import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import FilterCommon from '../accordion/accordionCommon';
import { Box, TextField, Checkbox, Typography } from '@mui/material';
import { addAlphabetIndex, filterByInput } from '@/app/lib/functions';
import { getSearchParams } from '@/app/lib/functions';
import { Counter } from './brand.styled';
import { Form, Label, ContainerFilter } from '@/app/lib/commonStyles';
// import { debounce } from 'lodash';
import { visuallyHidden } from '@mui/utils';
import { Row } from '@/app/lib/commonStyles';

export default function BrandFilter({ items }) {
  const [searchedBrand, setSearchedBrand] = useState('');
  const [debouncedBrand] = useDebounce(searchedBrand, 500);

  const { register, getValues } = useForm();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsBrand = getSearchParams(searchParams, 'brand');

  const brandsWithLetter = addAlphabetIndex(items, 'brand');
  const filtredBrands = filterByInput(
    brandsWithLetter,
    debouncedBrand,
    'brand'
  );

  const handleChecked = e => {
    const value = e.currentTarget.value.toLowerCase();
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const brands = current.get('brand');

    if (brands) {
      const brandArray = brands.split(',');
      if (brandArray.includes(value)) {
        brandArray.splice(brandArray.indexOf(value), 1);
      } else {
        brandArray.push(value);
      }
      if (brandArray.length > 0) {
        current.set('brand', brandArray.join(','));
      } else {
        current.delete('brand');
      }
    } else {
      current.set('brand', value);
    }
    const search = decodeURIComponent(current.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });

    // send request with values
    const values = getValues('brandName');
    console.log(values);
  };

  return (
    <FilterCommon title="Brand">
      <Typography component="h3" sx={visuallyHidden}>
        Search by brand
      </Typography>
      <Form component="form">
        <Box sx={{ pl: 2 }}>
          <TextField
            id="outlined"
            label="Brand name"
            type="search"
            size="small"
            value={searchedBrand}
            {...register('brandList', {
              onChange: e => setSearchedBrand(e.target.value),
            })}
          />
        </Box>

        <ContainerFilter component="ul">
          {items.length > 0 &&
            filtredBrands.map(({ id, brand, letter, count }) => {
              let checked = false;
              const brandMod = brand.toLowerCase();

              if (paramsBrand.includes(brandMod)) {
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
                        value={brand}
                        sx={{ p: 1 }}
                        size="small"
                        {...register('brandName', {
                          onChange: handleChecked,
                        })}
                      />
                    }
                    label={
                      <Row>
                        <Counter badgeContent={count}>
                          <Typography>{brand}</Typography>
                        </Counter>
                      </Row>
                    }
                  />
                </Box>
              );
            })}
        </ContainerFilter>
      </Form>
    </FilterCommon>
  );
}
