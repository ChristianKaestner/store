import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getSearchParams } from '@/app/lib/functions';
import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/lib/commonStyles';
// import { debounce } from 'lodash';
import { visuallyHidden } from '@mui/utils';
import { Typography } from '@mui/material';

export default function StatusFilter({ items }) {
  const { register, getValues } = useForm();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsStatus = getSearchParams(searchParams, 'status');

  const handleChecked = e => {
    const value = e.target.value.toLowerCase().split(' ').join('').trim();
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const status = current.get('status');

    if (status) {
      const statusArray = status.split(',');

      if (statusArray.includes(value)) {
        statusArray.splice(statusArray.indexOf(value), 1);
      } else {
        statusArray.push(value);
      }

      if (statusArray.length > 0) {
        current.set('status', statusArray.join(','));
      } else {
        current.delete('status');
      }
    } else {
      current.set('status', value);
    }

    const search = decodeURIComponent(current.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });

    //send request with values
    const values = getValues('status');
    console.log(values);
  };

  return (
    <FilterCommon title="Status">
      <Typography component="h3" sx={visuallyHidden}>
        Search by availability
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, status }) => {
            let checked = false;
            const statusMod = status.toLowerCase().split(' ').join('').trim();
            if (paramsStatus.includes(statusMod)) {
              checked = true;
            }
            return (
              <Box component="li" key={id}>
                <Label
                  control={
                    <Checkbox
                      checked={checked}
                      value={status}
                      sx={{ p: 1 }}
                      size="small"
                      {...register('status', {
                        onChange: handleChecked,
                      })}
                    />
                  }
                  label={status}
                />
              </Box>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
