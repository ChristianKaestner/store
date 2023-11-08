import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';
import { Counter, Row } from '@/app/lib/commonStyles';

export default function WeightFilter({ items }) {
  const weightCountsArr = Object.entries(items).map(([weight, count]) => ({
    weight,
    count,
  }));
  const { weight } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentWeight) => {
    const filter = { filterName: 'weight', filterValue: curentWeight };
    checked ? dispatch(addFilter(filter)) : dispatch(removeFilter(filter));
  };

  return (
    <AccordionCommon title="Weight">
      <Typography component="h3" sx={visuallyHidden}>
        Search by weight
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {weightCountsArr.map(item => {
            return (
              <Box component="li" key={item.weight}>
                <Label
                  label={
                    <Row>
                      <Counter badgeContent={item.count}>
                        <Typography sx={{ color: 'primary.dim' }}>
                          {item.weight + ' gram'}
                        </Typography>
                      </Counter>
                    </Row>
                  }
                  control={
                    <Checkbox
                      value={weight}
                      checked={weight.includes(item.weight.toString())}
                      sx={{ p: 1 }}
                      size="small"
                      onChange={(e, checked) => {
                        handleChecked(checked, item.weight.toString());
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
