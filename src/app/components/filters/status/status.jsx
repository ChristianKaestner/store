import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/utils/commonStyles';
export default function StatusFilter({ items }) {
  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Status">
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, status }) => {
            return (
              <Box component="li" key={id}>
                <Label
                  control={
                    <Checkbox value={status} sx={{ p: 1 }} size="small" />
                  }
                  label={status}
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
