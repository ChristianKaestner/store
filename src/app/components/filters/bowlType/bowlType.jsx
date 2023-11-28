import { useDispatch } from 'react-redux';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';
import { Counter, Row } from '@/app/lib/commonStyles';

export default function BowlTypeFilter({ items }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  const bowlTypeCountsArr = Object.entries(items).map(([bowlType, count]) => ({
    bowlType,
    count,
  }));
  const { bowl_type } = useFilters();

  const dispatch = useDispatch();

  const handleChecked = (checked, curentBowlType) => {
    const filter = { filterName: 'bowl_type', filterValue: curentBowlType };

    if (checked) {
      dispatch(addFilter(filter));
    } else {
      const bowlTypeParams = queryParams.get('bowl_type');
      const bowlTypeParamsArr = bowlTypeParams ? bowlTypeParams.split(',') : [];

      if (bowlTypeParamsArr.length > 1) {
        const newBowlTypeParams = bowlTypeParamsArr
          .filter(type => type !== curentBowlType)
          .join(',');
        queryParams.set('bowl_type', newBowlTypeParams);
      } else {
        queryParams.delete('bowl_type');
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
    <AccordionCommon title="Bowl type">
      <Typography component="h3" sx={visuallyHidden}>
        Search hookah bowl by type
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {bowlTypeCountsArr.map(item => {
            return (
              <Box component="li" key={item.bowlType}>
                <Label
                  label={
                    <Row>
                      <Counter badgeContent={item.count}>
                        <Typography sx={{ color: 'primary.dim' }}>
                          {item.bowlType}
                        </Typography>
                      </Counter>
                    </Row>
                  }
                  control={
                    <Checkbox
                      value={bowl_type}
                      checked={bowl_type.includes(item.bowlType.toLowerCase())}
                      sx={{ p: 1 }}
                      size="small"
                      onChange={(e, checked) => {
                        handleChecked(checked, item.bowlType.toLowerCase());
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
