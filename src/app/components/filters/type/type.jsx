import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/utils/commonStyles';

export default function TypeFilter({ items }) {
  const [checkedType, setCheckedType] = useState([]);
  const [debouncedChecked] = useDebounce(checkedType, 1500);

  const { register } = useForm();

  const handleChecked = ({ target }) => {
    if (target.checked) {
      setCheckedType([...checkedType, target.value]);
    }
    if (!target.checked) {
      const filtred = checkedType.filter(type => type !== target.value);
      setCheckedType(filtred);
    }
  };
  
  useEffect(() => {
    if (!debouncedChecked.length) return;
    //update data by Type
    console.log(debouncedChecked);
  }, [debouncedChecked]);

  return (
    <FilterCommon title="Type">
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, type }) => {
            return (
              <Box component="li" key={id}>
                <Label
                  control={
                    <Checkbox
                      value={type}
                      sx={{ p: 1 }}
                      size="small"
                      {...register('type', {
                        onChange: handleChecked,
                      })}
                    />
                  }
                  label={type}
                />
              </Box>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
