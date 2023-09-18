import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getSearchParams } from '@/app/lib/functions';
import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/lib/commonStyles';
// import { debounce } from 'lodash';
import { visuallyHidden } from '@mui/utils';
import { Typography } from '@mui/material';

export default function SizeFilter({ items }) {
  const { register, getValues } = useForm();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsSize = getSearchParams(searchParams, 'size');

  const handleChecked = e => {
    const value = e.target.value;
    console.log(value, typeof value);
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const sizes = current.get('size');

    if (sizes) {
      const sizeArray = sizes.split(',');

      if (sizeArray.includes(value)) {
        sizeArray.splice(sizeArray.indexOf(value), 1);
      } else {
        sizeArray.push(value);
      }

      if (sizeArray.length > 0) {
        current.set('size', sizeArray.join(','));
      } else {
        current.delete('size');
      }
    } else {
      current.set('size', value);
    }

    const search = decodeURIComponent(current.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });

    //send request with values
    const values = getValues('size');
    console.log(values);
  };

  return (
    <FilterCommon title="Size">
      <Typography component="h3" sx={visuallyHidden}>
        Search by size
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, size }) => {
            let checked = false;
            if (paramsSize.includes(size.toString())) {
              checked = true;
            }
            return (
              <Box component="li" key={id}>
                <Label
                  control={
                    <Checkbox
                      checked={checked}
                      value={size}
                      sx={{ p: 1 }}
                      size="small"
                      {...register('size', {
                        onChange: handleChecked,
                      })}
                    />
                  }
                  label={size + ' mm'}
                />
              </Box>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
