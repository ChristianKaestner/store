import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getSearchParams } from '@/app/lib/functions';
import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';
import { Typography } from '@mui/material/';
// import { debounce } from 'lodash';

export default function WeightFilter({ items }) {
  const { register, getValues } = useForm();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsWeight = getSearchParams(searchParams, 'weight');

  const handleChecked = e => {
    const value = e.currentTarget.value;
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const weights = current.get('weight');

    if (weights) {
      const weightArray = weights.split(',');

      if (weightArray.includes(value)) {
        weightArray.splice(weightArray.indexOf(value), 1);
      } else {
        weightArray.push(value);
      }

      if (weightArray.length > 0) {
        current.set('weight', weightArray.join(','));
      } else {
        current.delete('weight');
      }
    } else {
      current.set('weight', value);
    }

    const search = decodeURIComponent(current.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });

    // send request
    const values = getValues('weight');
    console.log(values);
  };

  return (
    <FilterCommon title="Weight">
      <Typography component="h3" sx={visuallyHidden}>
        Search by weight
      </Typography>
      <Form component="form">
        <List sx={{ pl: 2 }}>
          {items.map(({ id, weight }) => {
            let checked = false;
            if (paramsWeight.includes(weight.toString())) {
              checked = true;
            }
            return (
              <Box component="li" key={id}>
                <Label
                  control={
                    <Checkbox
                      checked={checked}
                      value={weight}
                      sx={{ p: 1 }}
                      size="small"
                      {...register('weight', {
                        onChange: handleChecked,
                      })}
                    />
                  }
                  label={weight + ' grams'}
                />
              </Box>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
