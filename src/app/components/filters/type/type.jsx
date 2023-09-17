import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/lib/commonStyles';
import { debounce } from 'lodash';

export default function TypeFilter({ items }) {
  const { register, getValues } = useForm();

  const handleChecked = debounce(() => {
    // send request
    const values = getValues('type');
    console.log(values);
  }, 1000);

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
