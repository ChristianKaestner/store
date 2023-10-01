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

export default function FlavorFilter({ items }) {
  const [searchedFlavor, setSearchedFlavor] = useState('');
  const [debouncedFlavor] = useDebounce(searchedFlavor, 500);

  const { flavor } = useFilters();
  const dispatch = useDispatch();

  const flavorsWithLetter = addAlphabetIndex(items, 'flavor');
  const filtredFlavors = filterByInput(
    flavorsWithLetter,
    debouncedFlavor,
    'flavor'
  );

  const handleChecked = (checked, curentFlavor) => {
    checked
      ? dispatch(
          addFilter({
            filterName: 'flavor',
            filterValue: curentFlavor,
          })
        )
      : dispatch(
          removeFilter({
            filterName: 'flavor',
            filterValue: curentFlavor,
          })
        );
  };

  return (
    <AccordionCommon title="Flavors">
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
            onChange={e => setSearchedFlavor(e.target.value)}
          />
        </Box>

        <ContainerFilter component="ul">
          {items.length > 0 &&
            filtredFlavors.map(item => {
              const { id, letter, count } = item;
              return (
                <Box key={id} component="li">
                  {letter && (
                    <Typography sx={{ fontWeight: 500, color: 'primary.dim' }}>
                      {letter}
                    </Typography>
                  )}
                  <Label
                    label={
                      <Row>
                        <Counter badgeContent={count}>
                          <Typography sx={{ color: 'primary.dim' }}>
                            {item.flavor}
                          </Typography>
                        </Counter>
                      </Row>
                    }
                    control={
                      <Checkbox
                        value={flavor}
                        checked={flavor.includes(item.flavor.toLowerCase())}
                        sx={{ p: 1 }}
                        size="small"
                        onChange={(e, checked) => {
                          handleChecked(checked, item.flavor.toLowerCase());
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
