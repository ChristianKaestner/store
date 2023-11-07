import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function HookahSizeFilter({ items }) {
  const hookahSizeArr = Object.entries(items).map(([hookahSize, count]) => ({
    hookahSize,
    count,
  }));
  const { hookahSize } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentHookahSize) => {
    const filter = {
      filterName: 'hookah_size',
      filterValue: curentHookahSize,
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
          {hookahSizeArr.map(item => {
            return (
              <Box component="li" key={item.hookahSize}>
                <Label
                  label={
                    <Typography sx={{ color: 'primary.dim' }}>
                      {item.hookahSize}
                    </Typography>
                  }
                  control={
                    <Checkbox
                      value={hookahSize}
                      checked={hookahSize.includes(item.hookahSize.toString())}
                      sx={{ p: 1 }}
                      size="small"
                      onChange={(e, checked) => {
                        handleChecked(checked, item.hookahSize.toString());
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
