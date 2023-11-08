import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';
import { Counter, Row } from '@/app/lib/commonStyles';

export default function SizeFilter({ items }) {
  const sizeCountsArr = Object.entries(items).map(([size, count]) => ({
    size,
    count,
  }));
  const { size } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentSize) => {
    const filter = {
      filterName: 'size',
      filterValue: curentSize,
    };
    checked ? dispatch(addFilter(filter)) : dispatch(removeFilter(filter));
  };

  return (
    <AccordionCommon title="Size">
      <Typography component="h3" sx={visuallyHidden}>
        Search by size
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {sizeCountsArr.map(item => {
            return (
              <Box component="li" key={item.size}>
                <Label
                  label={
                    <Row>
                      <Counter badgeContent={item.count}>
                        <Typography sx={{ color: 'primary.dim' }}>
                          {item.size + ' mm'}
                        </Typography>
                      </Counter>
                    </Row>
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
