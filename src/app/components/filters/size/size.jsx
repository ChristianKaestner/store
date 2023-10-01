import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function SizeFilter({ items }) {
  const { size } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentSize) => {
    checked
      ? dispatch(
          addFilter({
            filterName: 'size',
            filterValue: curentSize,
          })
        )
      : dispatch(
          removeFilter({
            filterName: 'size',
            filterValue: curentSize,
          })
        );
  };

  return (
    <AccordionCommon title="Size">
      <Typography component="h3" sx={visuallyHidden}>
        Search by size
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(item => {
            return (
              <Box component="li" key={item.id}>
                <Label
                  label={
                    <Typography sx={{ color: 'primary.dim' }}>
                      {item.size + ' mm'}
                    </Typography>
                  }
                  control={
                    <Checkbox
                      value={size}
                      checked={size.includes(item.size.toString())}
                      sx={{ p: 1 }}
                      size="small"
                      onChange={(e, checked) => {
                        handleChecked(checked, item.size.toString());
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
