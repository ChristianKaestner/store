'use client';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import RemoveIcon from '@mui/icons-material/Remove';
import { Slider, PriceForm } from './price.styled';
import { InputProps, Row } from '@/app/lib/commonStyles';
import { debounce } from 'lodash';

export default function PriceFilter({ items }) {
  const min = Math.min(...items);
  const max = Math.max(...items);
  const [errMin, setErrMin] = useState(false);
  const [errMax, setErrMax] = useState(false);

  const { control, getValues } = useForm();

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
    // send request
    const price = getValues();
    console.log(price);
  }, 1000);

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
                      // handleUpdatePrice();
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
                      // handleUpdatePrice();
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
