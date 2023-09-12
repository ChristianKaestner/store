import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/utils/commonStyles';

export default function WeightFilter({ items }) {
  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Weight">
      <Form component="form">
        <List sx={{ pl: 2 }}>
          {items.map(({ id, weight }) => {
            return (
              <Box component="li" key={id}>
                <Label
                  control={
                    <Checkbox value={weight} sx={{ p: 1 }} size="small" />
                  }
                  label={weight + ' grams'}
                  onClick={handleChecked}
                />
              </Box>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
