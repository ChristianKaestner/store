import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getSearchParams } from '@/app/lib/functions';
import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Box } from '@mui/material';
import { Form, List, Label } from '@/app/lib/commonStyles';
// import { debounce } from 'lodash';
import { visuallyHidden } from '@mui/utils';
import { Typography } from '@mui/material';

export default function TypeFilter({ items }) {
  const { register, getValues } = useForm();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsType = getSearchParams(searchParams, 'type');

  const handleChecked = e => {
    const value = e.target.value.toLowerCase().split(' ').join('').trim();
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const types = current.get('type');

    if (types) {
      const typeArray = types.split(',');

      if (typeArray.includes(value)) {
        typeArray.splice(typeArray.indexOf(value), 1);
      } else {
        typeArray.push(value);
      }

      if (typeArray.length > 0) {
        current.set('type', typeArray.join(','));
      } else {
        current.delete('type');
      }
    } else {
      current.set('type', value);
    }

    const search = decodeURIComponent(current.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });

    //send request with values
    const values = getValues('type');
    console.log(values);
  };

  return (
    <FilterCommon title="Type">
      <Typography component="h3" sx={visuallyHidden}>
        Search hookah bowl by type
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, type }) => {
            let checked = false;
            const typeMod = type.toLowerCase().split(' ').join('').trim();
            if (paramsType.includes(typeMod)) {
              checked = true;
            }
            return (
              <Box component="li" key={id}>
                <Label
                  control={
                    <Checkbox
                      checked={checked}
                      value={type}
                      sx={{ p: 1 }}
                      size="small"
                      {...register('type', {
                        onChange: handleChecked,
                      })}
                    />
                  }
                  label={type}
                />
              </Box>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
