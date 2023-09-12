import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/utils/commonStyles';
export default function TypeFilter({ items }) {
  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Type">
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, type }) => {
            return (
              <Box component="li" key={id}>
                <Label
                  control={<Checkbox value={type} sx={{ p: 1 }} size="small" />}
                  label={type}
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
