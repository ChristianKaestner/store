import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function StatusFilter({ items }) {
  const statusCountsArr = Object.entries(items).map(([status, count]) => ({
    status,
    count,
  }));
  const { status } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentStatus) => {
    const filter = { filterName: 'status', filterValue: curentStatus };
    checked ? dispatch(addFilter(filter)) : dispatch(removeFilter(filter));
  };

  return (
    <AccordionCommon title="Status">
      <Typography component="h3" sx={visuallyHidden}>
        Search by availability
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {statusCountsArr.map(item => {
            return (
              <Box component="li" key={item.status}>
                <Label
                  label={
                    <Typography sx={{ color: 'primary.dim' }}>
                      {item.status}
                    </Typography>
                  }
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
