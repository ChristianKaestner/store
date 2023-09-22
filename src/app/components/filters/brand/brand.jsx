import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { addAlphabetIndex, filterByInput } from '@/app/lib/functions';
import { Box, TextField, Checkbox, Typography } from '@mui/material';
import { Counter } from '@/app/lib/commonStyles';
import { Form, Label, ContainerFilter, Row } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function BrandFilter({ items }) {
  const [searchedBrand, setSearchedBrand] = useState('');
  const [debouncedBrand] = useDebounce(searchedBrand, 500);

  const { brand } = useFilters();
  const dispatch = useDispatch();
  
  const brandsWithLetter = addAlphabetIndex(items, 'brand');
  const filtredBrands = filterByInput(
    brandsWithLetter,
    debouncedBrand,
    'brand'
  );

  const handleChecked = (checked, curentBrand) => {
    checked
      ? dispatch(
          addFilter({
            filterName: 'brand',
            filterValue: curentBrand,
          })
        )
      : dispatch(
          removeFilter({
            filterName: 'brand',
            filterValue: curentBrand,
          })
        );
  };

  return (
    <AccordionCommon title="Brand">
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
            onChange={e => setSearchedBrand(e.target.value)}
          />
        </Box>

        <ContainerFilter component="ul">
          {items.length > 0 &&
            filtredBrands.map(item => {
              const { id, letter, count } = item;
              return (
                <Box key={id} component="li">
                  {letter && (
                    <Typography sx={{ fontWeight: 500 }}>{letter}</Typography>
                  )}
                  <Label
                    label={
                      <Row>
                        <Counter badgeContent={count}>
                          <Typography>{item.brand}</Typography>
                        </Counter>
                      </Row>
                    }
                    control={
                      <Checkbox
                        value={brand}
                        checked={brand.includes(item.brand.toLowerCase())}
                        sx={{ p: 1 }}
                        size="small"
                        onChange={(e, checked) => {
                          handleChecked(checked, item.brand.toLowerCase());
                        }}
                      />
                    }
                  />
                </Box>
              );
            })}
        </ContainerFilter>
      </Form>
    </AccordionCommon>
  );
}
