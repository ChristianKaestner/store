import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/utils/commonStyles';

export default function WeightFilter({ items }) {
  const [checkedWeight, setCheckedWeight] = useState([]);
  const [debouncedChecked] = useDebounce(checkedWeight, 1500);

  const { register } = useForm();

  const handleChecked = ({ target }) => {
    if (target.checked) {
      setCheckedWeight([...checkedWeight, target.value]);
    }
    if (!target.checked) {
      const filtred = checkedWeight.filter(weight => weight !== target.value);
      setCheckedWeight(filtred);
    }
  };

  useEffect(() => {
    if (!debouncedChecked.length) return;
    //update data by Weight
    console.log(debouncedChecked);
  }, [debouncedChecked]);

  return (
    <FilterCommon title="Weight">
      <Form component="form">
        <List sx={{ pl: 2 }}>
          {items.map(({ id, weight }) => {
            return (
              <Box component="li" key={id}>
                <Label
                  control={
                    <Checkbox
                      value={weight}
                      sx={{ p: 1 }}
                      size="small"
                      {...register('weight', {
                        onChange: handleChecked,
                      })}
                    />
                  }
                  label={weight + ' grams'}
                />
              </Box>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
