import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/utils/commonStyles';
import { debounce } from 'lodash';

export default function SizeFilter({ items }) {
  const { register, getValues } = useForm();

  const handleChecked = debounce(() => {
    // send request
    const values = getValues('size');
    console.log(values);
  }, 1000);

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
