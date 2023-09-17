import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/lib/commonStyles';
import { debounce } from 'lodash';

export default function StatusFilter({ items }) {
  const { register, getValues } = useForm();

  const handleChecked = debounce(() => {
    // send request
    const values = getValues('status');
    console.log(values);
  }, 1000);

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
