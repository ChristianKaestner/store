'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import { useForm, Controller } from 'react-hook-form';
import AccordionCommon from '../accordion/accordionCommon';
import RemoveIcon from '@mui/icons-material/Remove';
import { Slider, PriceForm } from './price.styled';
import { InputProps, Row } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';
import { Typography } from '@mui/material';
import debounce from 'lodash.debounce';

export default function PriceFilter({ items }) {
  const min = items.min;
  const max = items.max;
  const [errMin, setErrMin] = useState(false);
  const [errMax, setErrMax] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  const { price } = useFilters();
  const dispatch = useDispatch();
  const { control, getValues, setValue } = useForm();

  const defaultValues = useCallback(() => {
    if (price.length) {
      const priceArr = price[0].split('-');
      return priceArr.map(n => Number(n));
    } else {
      return [min, max];
    }
  }, [price, min, max]);

  useEffect(() => {
    const formValues = getValues();
    if (!price.length && formValues.price?.length) {
      setValue('price', defaultValues());
    }
    setErrMin(false);
    setErrMax(false);
  }, [price, getValues, defaultValues, setValue]);
  // getValues, defaultValues, setValue
  const validateMin = minValue => {
    if (minValue < min || minValue > max) {
      setErrMin(true);
      return;
    } else {
      setErrMin(false);
      handleUpdatePrice();
    }
  };

  const validateMax = maxValue => {
    if (maxValue > max || maxValue < min) {
      setErrMax(true);
      return;
    } else {
      setErrMax(false);
      handleUpdatePrice();
    }
  };

  const handleUpdatePrice = debounce(() => {
    const { price } = getValues();
    if (price[0] < min || price[0] > max || isNaN(price[0])) return;
    if (price[1] < min || price[1] > max || isNaN(price[1])) return;

    if (price[0] === min && price[1] === max) {
      queryParams.delete('price');

      setTimeout(() => {
        dispatch(
          removeFilter({
            filterName: 'price',
            filterValue: price,
          })
        );
      }, 500);
    } else {
      const newPrice = `${price[0]}-${price[1]}`;
      queryParams.set('price', newPrice);

      setTimeout(() => {
        dispatch(
          addFilter({
            filterName: 'price',
            filterValue: newPrice,
          })
        );
      }, 500);
    }

    const search = decodeURIComponent(queryParams.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  }, 1000);

  return (
    <AccordionCommon title="Price">
      <Typography component="h3" sx={visuallyHidden}>
        Search by price
      </Typography>
      <PriceForm component="form">
        <Controller
          control={control}
          name="price"
          value={defaultValues()}
          defaultValue={defaultValues()}
          render={({ field: { onChange, value } }) => {
            const minValue = isNaN(value[0]) ? min : value[0];
            const maxValue = isNaN(value[1]) ? max : value[1];
            return (
              <>
                <Row sx={{ alignItems: 'center' }}>
                  <InputProps
                    err={errMin}
                    id="min"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    size="small"
                    value={minValue}
                    onChange={e => {
                      validateMin(+e.target.value);
                      onChange([+e.target.value, maxValue]);
                      handleUpdatePrice();
                    }}
                  />
                  <RemoveIcon sx={{ color: 'primary.light' }} />
                  <InputProps
                    err={errMax}
                    id="max"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    size="small"
                    value={maxValue}
                    onChange={e => {
                      validateMax(+e.target.value);
                      onChange([minValue, +e.target.value]);
                      handleUpdatePrice();
                    }}
                  />
                </Row>
                <Slider
                  id="range"
                  value={[+minValue, +maxValue]}
                  min={+min}
                  max={+max}
                  onChange={(e, value) => {
                    validateMin(value[0]);
                    validateMax(value[1]);
                    onChange(value);
                    handleUpdatePrice();
                  }}
                />
              </>
            );
          }}
        />
      </PriceForm>
    </AccordionCommon>
  );
}
