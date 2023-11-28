import { useDispatch } from 'react-redux';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';
import { Counter, Row } from '@/app/lib/commonStyles';

export default function TypeFilter({ items }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));
  const typeCountsArr = Object.entries(items).map(([type, count]) => ({
    type,
    count,
  }));
  const { type } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentType) => {
    const filter = { filterName: 'type', filterValue: curentType };

    if (checked) {
      dispatch(addFilter(filter));
    } else {
      const typeParams = queryParams.get('type');
      const typeParamsArr = typeParams ? typeParams.split(',') : [];

      if (typeParamsArr.length > 1) {
        const newTypeParams = typeParamsArr
          .filter(type => type !== curentType)
          .join(',');
        queryParams.set('type', newTypeParams);
      } else {
        queryParams.delete('type');
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
    <AccordionCommon title="Type">
      <Typography component="h3" sx={visuallyHidden}>
        Search hookah accessories by type
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {typeCountsArr.map(item => {
            return (
              <Box component="li" key={item.type}>
                <Label
                  label={
                    <Row>
                      <Counter badgeContent={item.count}>
                        <Typography sx={{ color: 'primary.dim' }}>
                          {item.type}
                        </Typography>
                      </Counter>
                    </Row>
                  }
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
