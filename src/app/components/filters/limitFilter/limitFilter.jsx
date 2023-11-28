'use client';
import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LimitFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  const { control, setValue } = useForm();
  const { limit, page, multiplier } = useFilters();
  const dispatch = useDispatch();

  const handleChange = currentLimit => {
    currentLimit === 25
      ? queryParams.delete('limit')
      : queryParams.set('limit', currentLimit);

    setTimeout(() => {
      dispatch(addFilter({ filterName: 'limit', filterValue: currentLimit }));
    }, 500);

    if (page !== 1) {
      queryParams.delete('page');
      setTimeout(() => {
        dispatch(addFilter({ filterName: 'page', filterValue: 1 }));
      }, 500);
    }
    
    if (multiplier !== 1) {
      queryParams.delete('multiplier');
      setTimeout(() => {
        dispatch(addFilter({ filterName: 'multiplier', filterValue: 1 }));
      }, 500);
    }

    const search = decodeURIComponent(queryParams.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  };

  useEffect(() => {
    setValue('limit', limit);
  }, [setValue, limit]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', mb: 2, zIndex: 1 }}>
      <FormControl size="small" sx={{ width: 80 }}>
        <Controller
          control={control}
          name="limit"
          defaultValue={limit}
          value={limit}
          render={({ field: { onChange, value } }) => {
            return (
              <Select
                id="limit-select"
                value={value}
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
                <MenuItem value={25}>
                  <em>25</em>
                </MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
              </Select>
            );
          }}
        />
      </FormControl>
    </Box>
  );
}
