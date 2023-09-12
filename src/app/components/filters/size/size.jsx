import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/utils/commonStyles';

export default function SizeFilter({ items }) {
  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Size">
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, size }) => {
            return (
              <Box component="li" key={id}>
                <Label
                  control={<Checkbox value={size} sx={{ p: 1 }} size="small" />}
                  label={size + ' mm'}
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
