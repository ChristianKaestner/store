'use client';
import { useState, useEffect } from 'react';
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
  const min = Math.min(...items);
  const max = Math.max(...items);
  const [errMin, setErrMin] = useState(false);
  const [errMax, setErrMax] = useState(false);

  const { price } = useFilters();
  const dispatch = useDispatch();
  const { control, getValues, reset } = useForm();

  useEffect(() => {
    const formValues = getValues();
    if (!price.length && formValues.price.length) reset();
    setErrMin(false);
    setErrMax(false);
  }, [price]);

  const defaultValues = () => {
    if (price.length) {
      const priceArr = price[0].split('-');
      return priceArr.map(n => Number(n));
    } else {
      return [min, max];
    }
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

  const handleUpdatePrice = debounce(() => {
    const { price } = getValues();
    if (price[0] < min || price[0] > max || isNaN(price[0])) return;
    if (price[1] < min || price[1] > max || isNaN(price[1])) return;

    price[0] === min && price[1] === max
      ? dispatch(
          removeFilter({
            filterName: 'price',
            filterValue: price,
          })
        )
      : dispatch(
          addFilter({
            filterName: 'price',
            filterValue: `${price[0]}-${price[1]}`,
          })
        );

    // send request
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
                    console.log(value);
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
