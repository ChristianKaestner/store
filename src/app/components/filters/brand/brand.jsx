import { useState } from 'react';
import FilterCommon from '../common/filterCommon';
import {
  FormControl,
  TextField,
  Checkbox,
  Typography,
  FormControlLabel,
  FormGroup,
} from '@mui/material';

const brands = [
  { id: 1, name: 'Abc' },
  { id: 2, name: 'Btc' },
  { id: 3, name: 'Cdo' },
  { id: 4, name: 'Arb' },
  { id: 5, name: 'Etf' },
  { id: 6, name: 'Bob' },
  { id: 7, name: 'Gld' },
  { id: 8, name: 'Int' },
  { id: 9, name: 'Klm' },
  { id: 10, name: 'Nft' },
];

const CustomCheckBoxStyles = {
  '& .MuiSvgIcon-root': {
    color: 'primary.light',
  },
};

export default function BrandFilter() {
  const [searchValue, setSearchValue] = useState('');

  const addAlphabetIndex = brands => {
    let alphabetIndex = '';
    return brands
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(brand => {
        if (alphabetIndex !== brand.name[0]) {
          alphabetIndex = brand.name[0];
          return { ...brand, letter: brand.name[0].toUpperCase() };
        }
        return brand;
      });
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
          type="text"
          size="small"
          value={searchValue}
        />
        <FormGroup
          sx={{
            flexWrap: 'nowrap',
            width: '100%',
            maxHeight: 400,
            overflow: 'auto',
            mt: 2,
            pl: 2,
          }}
        >
          {brands.length &&
            brands
              //   .sort(brand => brand.name)
              .map(({ id, name }) => {
                return (
                  <FormControlLabel
                    control={<Checkbox sx={CustomCheckBoxStyles} />}
                    label={name}
                    key={id}
                  />
                );
              })}
        </FormGroup>
      </FormControl>
    </FilterCommon>
  );
}
