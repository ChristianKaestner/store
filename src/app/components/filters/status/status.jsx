import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function StatusFilter({ items }) {
  const { status } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentStatus) => {
    checked
      ? dispatch(
          addFilter({
            filterName: 'status',
            filterValue: curentStatus,
          })
        )
      : dispatch(
          removeFilter({
            filterName: 'status',
            filterValue: curentStatus,
          })
        );
  };

  return (
    <AccordionCommon title="Status">
      <Typography component="h3" sx={visuallyHidden}>
        Search by availability
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(item => {
            return (
              <Box component="li" key={item.id}>
                <Label
                  label={item.status}
                  control={
                    <Checkbox
                      value={status}
                      checked={status.includes(item.status.toLowerCase())}
                      sx={{ p: 1 }}
                      size="small"
                      onChange={(e, checked) => {
                        handleChecked(checked, item.status.toLowerCase());
                      }}
                    />
                  }
                />
              </Box>
            );
          })}
        </List>
      </Form>
    </AccordionCommon>
  );
}
