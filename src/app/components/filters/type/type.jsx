import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function TypeFilter({ items }) {
  const { type } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentType) => {
    checked
      ? dispatch(
          addFilter({
            filterName: 'type',
            filterValue: curentType,
          })
        )
      : dispatch(
          removeFilter({
            filterName: 'type',
            filterValue: curentType,
          })
        );
  };

  return (
    <AccordionCommon title="Type">
      <Typography component="h3" sx={visuallyHidden}>
        Search hookah bowl by type
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(item => {
            return (
              <Box component="li" key={item.id}>
                <Label
                  label={item.type}
                  control={
                    <Checkbox
                      value={type}
                      checked={type.includes(item.type.toLowerCase())}
                      sx={{ p: 1 }}
                      size="small"
                      onChange={(e, checked) => {
                        handleChecked(checked, item.type.toLowerCase());
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
