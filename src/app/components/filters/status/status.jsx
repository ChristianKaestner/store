import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/utils/commonStyles';
import { useIsMount } from '@/app/hooks/useMount';

export default function StatusFilter({ items }) {
  const [checkedStatus, setCheckedStatus] = useState([]);
  const [debouncedChecked] = useDebounce(checkedStatus, 1500);

  const isMount = useIsMount();

  const { register } = useForm();

  const handleChecked = ({ target }) => {
    if (target.checked) {
      setCheckedStatus([...checkedStatus, target.value]);
    }
    if (!target.checked) {
      const filtred = checkedStatus.filter(status => status !== target.value);
      setCheckedStatus(filtred);
    }
  };
  useEffect(() => {
    if (isMount) return;
    //update data by status
    console.log(debouncedChecked);
  }, [debouncedChecked]);

  return (
    <FilterCommon title="Status">
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, status }) => {
            return (
              <Box component="li" key={id}>
                <Label
                  control={
                    <Checkbox
                      value={status}
                      sx={{ p: 1 }}
                      size="small"
                      {...register('status', {
                        onChange: handleChecked,
                      })}
                    />
                  }
                  label={status}
                />
              </Box>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
