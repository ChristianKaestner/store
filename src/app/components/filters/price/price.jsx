'use client';
import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getSearchParams } from '@/app/lib/functions';
import { useForm, Controller } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import RemoveIcon from '@mui/icons-material/Remove';
import { Slider, PriceForm } from './price.styled';
import { InputProps, Row } from '@/app/lib/commonStyles';
// import { debounce } from 'lodash';
import { visuallyHidden } from '@mui/utils';
import { Typography } from '@mui/material';

export default function PriceFilter({ items }) {
  const min = Math.min(...items);
  const max = Math.max(...items);
  const [errMin, setErrMin] = useState(false);
  const [errMax, setErrMax] = useState(false);

  const { control, getValues } = useForm();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsPrice = getSearchParams(searchParams, 'price');

  const defaultValues = () => {
    if (paramsPrice.length) {
      const priceArr = paramsPrice[0].split('-');
      return priceArr.map(n => Number(n));
    } else return [min, max];
  };

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

  const handleUpdatePrice = () => {
    const { price } = getValues();
    if (price[0] < min || price[0 > max] || isNaN(price[0])) return;
    if (price[1] < min || price[1 > max] || isNaN(price[1])) return;
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const priceParams = current.get('price');

    if (priceParams) {
      const priceArray = priceParams.split('-');
      if (priceArray[0] !== price[0].toString()) {
        priceArray.shift();
        priceArray.unshift(price[0].toString());
      }
      if (priceArray[1] !== price[1].toString()) {
        priceArray.pop();
        priceArray.push(price[1].toString());
      }
      if (
        priceArray[0] === min.toString() &&
        priceArray[1] === max.toString()
      ) {
        current.delete('price');
      } else {
        current.set('price', priceArray.join('-'));
      }
    } else {
      current.set('price', price.join('-'));
    }

    const search = decodeURIComponent(current.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });

    // send request
  };

  return (
    <FilterCommon title="Price">
      <Typography component="h3" sx={visuallyHidden}>
        Search by price
      </Typography>
      <PriceForm component="form">
        <Controller
          control={control}
          name="price"
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
                    onChange(value);
                    handleUpdatePrice();
                  }}
                />
              </>
            );
          }}
        />
      </PriceForm>
    </FilterCommon>
  );
}
