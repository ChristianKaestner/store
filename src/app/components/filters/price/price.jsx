'use client';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import RemoveIcon from '@mui/icons-material/Remove';
import { Slider, PriceForm } from './price.styled';
import { InputProps, Row } from '@/app/utils/commonStyles';
import { useDebounce } from 'use-debounce';
import { useIsMount } from '@/app/hooks/useMount';

export default function PriceFilter({ items }) {
  const min = Math.min(...items);
  const max = Math.max(...items);
  const [price, setPrice] = useState([min, max]);
  const [debouncedPrice] = useDebounce(price, 2000);
  const [errMin, setErrMin] = useState(false);
  const [errMax, setErrMax] = useState(false);
  const isMount = useIsMount();

  useEffect(() => {
    if (errMax || errMin) return;
    if (isMount) return;
    //update data by price
    console.log(debouncedPrice);
  }, [debouncedPrice]);

  const { control } = useForm();

  const validateMin = minValue => {
    minValue < min || minValue > max ? setErrMin(true) : setErrMin(false);
  };

  const validateMax = maxValue => {
    maxValue > max || maxValue < min ? setErrMax(true) : setErrMax(false);
  };

  return (
    <FilterCommon title="Price">
      <PriceForm component="form">
        <Controller
          control={control}
          name="price"
          defaultValue={[min, max]}
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
                      setPrice([+e.target.value, maxValue]);
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
                      setPrice([minValue, +e.target.value]);
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
                    setPrice(value);
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
