import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function WeightFilter({ items }) {
  const { weight } = useFilters();
  const dispatch = useDispatch();
  console.log(weight);
  const handleChecked = (checked, curentWeight) => {
    checked
      ? dispatch(
          addFilter({
            filterName: 'weight',
            filterValue: curentWeight,
          })
        )
      : dispatch(
          removeFilter({
            filterName: 'weight',
            filterValue: curentWeight,
          })
        );
  };

  return (
    <AccordionCommon title="Weight">
      <Typography component="h3" sx={visuallyHidden}>
        Search by weight
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(item => {
            return (
              <Box component="li" key={item.id}>
                <Label
                  label={item.weight + ' gram'}
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
