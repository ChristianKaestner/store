'use client';

import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  const { control, setValue } = useForm();
  const { sort } = useFilters();
  const dispatch = useDispatch();

  const handleChange = currentSort => {
    if (!currentSort) {
      queryParams.delete('sort');
    } else {
      queryParams.set('sort', currentSort);
    }
    setTimeout(() => {
      dispatch(addFilter({ filterName: 'sort', filterValue: currentSort }));
    }, 500);

    const search = decodeURIComponent(queryParams.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  };

  useEffect(() => {
    setValue('sort', sort);
  }, [setValue, sort]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', mb: 2, zIndex: 1 }}>
      <FormControl size="small" sx={{ width: { xs: 150, sm: 200 } }}>
        <InputLabel
          id="sorting-filter-label"
          sx={{ color: 'primary.dim' }}
          className="labelSelect"
        >
          Sort
        </InputLabel>
        <Controller
          control={control}
          name="sort"
          defaultValue={sort}
          value={sort}
          render={({ field: { onChange, value } }) => {
            return (
              <Select
                labelId="sorting-filter-label"
                id="sorting-select"
                value={value}
                label="Sort"
                onChange={e => {
                  onChange(e.target.value);
                  handleChange(e.target.value);
                }}
                sx={{
                  '&:hover': {
                    '& .labelSelect': {
                      color: 'red important!',
                    },
                  },
                }}
              >
                <MenuItem value={''}>
                  <em>default</em>
                </MenuItem>
                <MenuItem value={'cheap'}>cheap</MenuItem>
                <MenuItem value={'expensive'}>expensive</MenuItem>
                <MenuItem value={'newer'}>newer</MenuItem>
                <MenuItem value={'older'}>older</MenuItem>
              </Select>
            );
          }}
        />
      </FormControl>
    </Box>
  );
}
