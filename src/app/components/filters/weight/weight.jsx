import { useDispatch } from 'react-redux';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';
import { Counter, Row } from '@/app/lib/commonStyles';

export default function WeightFilter({ items }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));
  const weightCountsArr = Object.entries(items).map(([weight, count]) => ({
    weight,
    count,
  }));
  const { weight } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentWeight) => {
    const filter = { filterName: 'weight', filterValue: curentWeight };

    if (checked) {
      dispatch(addFilter(filter));
    } else {
      const weightParams = queryParams.get('weight');
      const weightParamsArr = weightParams ? weightParams.split(',') : [];
      
      if (weightParamsArr.length > 1) {
        const newWeightParams = weightParamsArr
          .filter(weight => weight !== curentWeight)
          .join(',');
        queryParams.set('weight', newWeightParams);
      } else {
        queryParams.delete('weight');
      }

      const search = decodeURIComponent(queryParams.toString());
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`, { scroll: false });

      setTimeout(() => {
        dispatch(removeFilter(filter));
      }, 500);
    }
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
