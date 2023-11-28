import { useDispatch } from 'react-redux';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function StatusFilter({ items }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  const statusCountsArr = Object.entries(items).map(([status, count]) => ({
    status,
    count,
  }));
  const { status } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentStatus) => {
    const filter = { filterName: 'status', filterValue: curentStatus };

    if (checked) {
      dispatch(addFilter(filter));
    } else {
      const statusParams = queryParams.get('status');
      const statusParamsArr = statusParams ? statusParams.split(',') : [];

      if (statusParamsArr.length > 1) {
        const newStatusParams = statusParamsArr
          .filter(status => status !== curentStatus)
          .join(',');
        queryParams.set('status', newStatusParams);
      } else {
        queryParams.delete('status');
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
