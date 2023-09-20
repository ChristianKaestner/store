import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getSearchParams } from '@/app/lib/functions';
import { useForm } from 'react-hook-form';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Typography } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import { Form, Row, RowCenter, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';
// import { debounce } from 'lodash';

export default function ColorFilter({ items }) {
  const { register, getValues } = useForm();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsColor = getSearchParams(searchParams, 'color');

  const handleChecked = e => {
    const value = e.currentTarget.value.toLowerCase();
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const colors = current.get('color');

    if (colors) {
      const colorArray = colors.split(',');

      if (colorArray.includes(value)) {
        colorArray.splice(colorArray.indexOf(value), 1);
      } else {
        colorArray.push(value);
      }

      if (colorArray.length > 0) {
        current.set('color', colorArray.join(','));
      } else {
        current.delete('color');
      }
    } else {
      current.set('color', value);
    }

    const search = decodeURIComponent(current.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });

    //send request with values
    const values = getValues('color');
    console.log('values', values);
  };

  return (
    <FilterCommon title="Color">
      <Typography component="h3" sx={visuallyHidden}>
        Search by color
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, color }) => {
            let checked = false;
            const colorMod = color.toLowerCase();

            if (paramsColor.includes(colorMod)) {
              checked = true;
            }
            return (
              <Row component="li" key={id}>
                <Label
                  control={
                    <Checkbox
                      checked={checked}
                      value={color}
                      sx={{ p: 1 }}
                      size="small"
                      {...register('color', {
                        onChange: handleChecked,
                      })}
                    />
                  }
                  label={
                    <RowCenter sx={{ gap: 1 }}>
                      <SquareIcon
                        fontSize="small"
                        style={{
                          stroke: '#000',
                          fill: color,
                        }}
                      />
                      <Typography>{color}</Typography>
                    </RowCenter>
                  }
                />
              </Row>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
