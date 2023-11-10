'use client';

import { useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { useFilters } from '@/app/hooks/useFilters';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { resetFilters } from '@/app/redux/filters/slice';
import { FilterBlock, FilterBtn, IconClose } from './sortbar.styled';
import { Box } from '@mui/material';
import { TextBold } from '@/app/lib/commonStyles';
import { objectToArray, updatedFilterLabel } from '@/app/lib/functions';
import { useIsMount } from '@/app/hooks/useMount';

//need to validate url params, if params consist some filter or values which doesn't inculdes in list, skip ...
export default function Sortbar({ mobile = false, total }) {
  const filters = useFilters();
  const filtersArr = objectToArray(filters);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const isMount = useIsMount();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  // const updateFilters = useCallback(() => {
  //   // check redux state and update param
  //   Object.keys(filters).forEach(filterName => {
  //     const filterValue = filters[filterName];
  //     // if filter exist in state, set it to params
  //     if (filterValue.length) {
  //       queryParams.set(filterName, filterValue);
  //     }

  //     // if no filter in redux and not first load delete filter
  //     if (filterValue.length === 0 && !isMount && queryParams.size !== 0) {
  //       queryParams.delete(filterName);
  //     }
  //   });

  //   //parse param from url and set redux state
  //   if (isMount) {
  //     queryParams.forEach((filterValue, filterName) => {
  //       if (filterName in filters) {
  //         const filterValues = filterValue.split(',');

  //         filterValues.forEach(value => {
  //           if (!filters[filterName].includes(value)) {
  //             dispatch(addFilter({ filterName, filterValue: value }));
  //           }
  //         });
  //       }
  //     });
  //   }

  //   // set url params
  //   const search = decodeURIComponent(queryParams.toString());
  //   const query = search ? `?${search}` : '';
  //   router.push(`${pathname}${query}`, { scroll: false });
  // });

  if (isMount) {
    queryParams.forEach((filterValue, filterName) => {
      if (filterName in filters) {
        const filterValues = filterValue.split(',');

        filterValues.forEach(value => {
          if (!filters[filterName].includes(value)) {
            dispatch(addFilter({ filterName, filterValue: value }));
          }
        });
      }
    });
  }

  const areFiltersEmpty =
    filters.brand.length === 0 &&
    filters.color.length === 0 &&
    filters.hookah_size.length === 0 &&
    filters.price.length === 0 &&
    filters.size.length === 0 &&
    filters.status.length === 0 &&
    filters.type.length === 0 &&
    filters.bowl_type.length === 0 &&
    filters.weight.length === 0 &&
    filters.flavor.length === 0;

  const areQueryParamsEmpty = queryParams.size === 0;

  useEffect(() => {
    if (areFiltersEmpty && areQueryParamsEmpty) {
      return;
    }
    Object.keys(filters).forEach(filterName => {
      const filterValue = filters[filterName];

      if (filterValue.length) {
        queryParams.set(filterName, filterValue);
      }

      if (filterValue.length === 0 && !isMount) {
        queryParams.delete(filterName);
      }
    });

    const search = decodeURIComponent(queryParams.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  }, [filters, searchParams, dispatch]);

  const handleDelete = useCallback(
    e => {
      const { id, textContent } = e.currentTarget;
      dispatch(removeFilter({ filterName: id, filterValue: textContent }));
    },
    [dispatch]
  );

  const handleDeleteAll = useCallback(() => {
    dispatch(resetFilters());
  }, [dispatch]);

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
