import { useDispatch } from 'react-redux';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Box, Typography } from '@mui/material';
import { Form, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function HookahSizeFilter({ items }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  const hookahSizeArr = Object.entries(items).map(([hookahSize, count]) => ({
    hookahSize,
    count,
  }));
  const { hookah_size } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentHookahSize) => {
    const filter = { filterName: 'hookah_size', filterValue: curentHookahSize };

    if (checked) {
      dispatch(addFilter(filter));
    } else {
      const hookahSizeParams = queryParams.get('hookah_size');
      const hookahSizeParamsArr = hookahSizeParams
        ? hookahSizeParams.split(',')
        : [];

      if (hookahSizeParamsArr.length > 1) {
        const newHookahSizeParams = hookahSizeParamsArr
          .filter(hookahSize => hookahSize !== curentHookahSize)
          .join(',');
        queryParams.set('hookah_size', newHookahSizeParams);
      } else {
        queryParams.delete('hookah_size');
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
                      value={hookah_size}
                      checked={hookah_size.includes(item.hookahSize.toString())}
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
