import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/utils/commonStyles';
import { debounce } from 'lodash';

export default function WeightFilter({ items }) {
  const { register, getValues } = useForm();

  const handleChecked = debounce(() => {
    // send request
    const values = getValues('weight');
    console.log(values);
  }, 1000);

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
