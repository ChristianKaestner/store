'use client';

import { useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useFilters } from '@/app/hooks/useFilters';
import {
  addFilter,
  removeFilter,
  resetFilters,
} from '@/app/redux/filters/slice';
import { FilterBlock, FilterBtn, IconClose } from './sortbar.styled';
import { Box } from '@mui/material';
import { TextBold } from '@/app/lib/commonStyles';
import { objectToArray, updatedFilterLabel } from '@/app/lib/functions';
import { useIsMount } from '@/app/hooks/useMount';

//need to validate url params, if params consist some filter or values which doesn't inculdes in list, skip ...
export default function Sortbar() {
  const filters = useFilters();
  const filtersArr = objectToArray(filters);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const isMount = useIsMount();

  const updateFilters = () => {
    const queryParams = new URLSearchParams(Array.from(searchParams.entries()));
    // check redux state and update param
    Object.keys(filters).forEach(filterName => {
      const filterValue = filters[filterName];
      // if filter exist in state, set it to params
      if (filterValue.length) {
        queryParams.set(filterName, filterValue);
      }
      // if no filter and not first load delete filter
      if (!filterValue.length && !isMount) {
        queryParams.delete(filterName);
      }
    });

    //parse param from url and set redux state
    queryParams.forEach((filterValue, filterName) => {
      if (filterName in filters) {
        const filterValues = filterValue.split(',');
        // console.log('parse param');
        filterValues.forEach(value => {
          if (!filters[filterName].includes(value)) {
            dispatch(addFilter({ filterName, filterValue: value }));
          }
        });
      }
    });

    // set url params
    const search = decodeURIComponent(queryParams.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  };

  useEffect(() => {
    updateFilters();
  }, [filters, searchParams, dispatch]);

  const handleDelete = e => {
    const filterName = e.currentTarget.id;
    const filterValue = e.currentTarget.textContent;
    dispatch(removeFilter({ filterName, filterValue }));
  };

  const handleDeleteAll = () => {
    dispatch(resetFilters());
  };

  return (
    <Box>
      {filtersArr.length > 0 && (
        <FilterBlock component="ul" sx={{ gap: 1, flexWrap: 'wrap' }}>
          <TextBold>30 products found</TextBold>
          <FilterBtn
            variant="outlined"
            endIcon={<IconClose />}
            component="li"
            onClick={handleDeleteAll}
          >
            clear all
          </FilterBtn>
          {filtersArr.map(({ name, value }) => {
            return (
              <FilterBtn
                key={value}
                id={name}
                variant="outlined"
                endIcon={<IconClose />}
                component="li"
                onClick={handleDelete}
              >
                {updatedFilterLabel(name, value)}
              </FilterBtn>
            );
          })}
        </FilterBlock>
      )}
    </Box>
  );
}
