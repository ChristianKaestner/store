import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/utils/commonStyles';
import { useIsMount } from '@/app/hooks/useMount';

export default function SizeFilter({ items }) {
  const [checkedSize, setCheckedSize] = useState([]);
  const [debouncedChecked] = useDebounce(checkedSize, 1500);

  const isMount = useIsMount();

  const { register } = useForm();

  const handleChecked = ({ target }) => {
    if (target.checked) {
      setCheckedSize([...checkedSize, target.value]);
    }
    if (!target.checked) {
      const filtred = checkedSize.filter(size => size !== target.value);
      setCheckedSize(filtred);
    }
  };
  useEffect(() => {
    if (isMount) return;
    //update data by size
    console.log(debouncedChecked);
  }, [debouncedChecked]);

  return (
    <FilterCommon title="Size">
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, size }) => {
            return (
              <Box component="li" key={id}>
                <Label
                  control={
                    <Checkbox
                      value={size}
                      sx={{ p: 1 }}
                      size="small"
                      {...register('size', {
                        onChange: handleChecked,
                      })}
                    />
                  }
                  label={size + ' mm'}
                />
              </Box>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
