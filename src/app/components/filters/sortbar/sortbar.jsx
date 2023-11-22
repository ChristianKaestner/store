'use client';

import { useRef, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useFilters } from '@/app/hooks/useFilters';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { resetFilters } from '@/app/redux/filters/slice';
import { FilterBlock, FilterBtn, IconClose } from './sortbar.styled';
import { Box } from '@mui/material';
import { TextBold } from '@/app/lib/commonStyles';
import { objectToArray, updatedFilterLabel } from '@/app/lib/functions';
// import { useIsMount } from '@/app/hooks/useMount';
import isEqual from 'lodash.isequal';

export default function Sortbar({ mobile = false, total }) {
  const filters = useFilters();
  const filtersArr = objectToArray(filters);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  // const isMount = useIsMount();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  useEffect(() => {
    // if (isMount) {
    queryParams.forEach((filterValue, filterName) => {
      if (filterName in filters) {
        const filterValues = filterValue.split(',');

        filterValues.forEach(value => {
          if (Array.isArray(filters[filterName])) {
            if (!filters[filterName].includes(value)) {
              dispatch(addFilter({ filterName, filterValue: value }));
            }
          } else {
            if (filters[filterName] !== value) {
              dispatch(addFilter({ filterName, filterValue: value }));
            }
          }
        });
      }
    });
    // }
  }, [queryParams]);

  const lastFilters = useRef(filters);

  useEffect(() => {
    if (isEqual(filters, lastFilters.current)) {
      return;
    }
    lastFilters.current = filters;

    Object.keys(filters).forEach(filterName => {
      const filterValue = filters[filterName];
      if (
        filterValue.length &&
        filterName !== 'limit' &&
        filterName !== 'page' &&
        filterName !== 'multiplier'
      ) {
        queryParams.set(filterName, filterValue);
      } else if (filterName === 'limit' && filterValue !== 25) {
        const paramLimit = queryParams.get('limit');
        if (paramLimit === filterValue) return;
        queryParams.set(filterName, filterValue);
      } else if (filterName === 'page' && filterValue !== 1) {
        queryParams.set(filterName, filterValue);
      } else {
        queryParams.delete(filterName);
      }
    });

    const search = decodeURIComponent(queryParams.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  }, [filters, searchParams, dispatch]);

  // const handleDelete = e => {
  //   const { id, textContent } = e.currentTarget;
  //   dispatch(removeFilter({ filterName: id, filterValue: textContent }));
  // };

  // const handleDeleteAll = useCallback(() => {
  //   //delete all query param
  //   dispatch(resetFilters());
  // }, [dispatch]);

  const handleDelete = e => {
    const { id, textContent } = e.currentTarget;
    const filter = queryParams.get(id);
    const filterArr = filter.split(',');
    if (filterArr.length > 1) {
      const updatedFilterArr = filterArr.filter(value => value !== textContent);
      queryParams.set(id, updatedFilterArr.join(','));
    } else {
      queryParams.delete(id);
    }
    const search = decodeURIComponent(queryParams.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
    setTimeout(() => {
      dispatch(removeFilter({ filterName: id, filterValue: textContent }));
    }, 500);
  };

  const handleDeleteAll = async () => {
    router.replace(pathname, { scroll: false });
    setTimeout(() => {
      dispatch(resetFilters());
    }, 500);
  };

  return (
    <Box sx={{ zIndex: 1 }}>
      {filtersArr.length > 0 && !mobile && (
        <FilterBlock component="ul" sx={{ gap: 1, flexWrap: 'wrap' }}>
          <TextBold>{total} products found</TextBold>
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
