import { useDispatch } from 'react-redux';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Typography } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import { Form, Row, RowCenter, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function ColorFilter({ items }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  const colorCountsArr = Object.entries(items).map(([color, values]) => ({
    color,
    count: values.count,
    colorValue: values.colorValue,
  }));

  const { color } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentcolor) => {
    const filter = { filterName: 'color', filterValue: curentcolor };

    if (checked) {
      dispatch(addFilter(filter));
    } else {
      const colorParams = queryParams.get('color');
      const colorParamsArr = colorParams ? colorParams.split(',') : [];

      if (colorParamsArr.length > 1) {
        const newColorParams = colorParamsArr
          .filter(color => color !== curentcolor)
          .join(',');
        queryParams.set('color', newColorParams);
      } else {
        queryParams.delete('color');
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
    <AccordionCommon title="Color">
      <Typography component="h3" sx={visuallyHidden}>
        Search by color
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {colorCountsArr.map(item => {
            return (
              <Row component="li" key={item.color}>
                <Label
                  label={
                    <RowCenter sx={{ gap: 1 }}>
                      <SquareIcon
                        fontSize="small"
                        style={{
                          stroke: '#000',
                          fill: item.colorValue,
                        }}
                      />
                      <Typography sx={{ color: 'primary.dim' }}>
                        {item.color}
                      </Typography>
                    </RowCenter>
                  }
                  control={
                    <Checkbox
                      value={color}
                      checked={color.includes(item.color.toLowerCase())}
                      sx={{ p: 1 }}
                      size="small"
                      onChange={(e, checked) => {
                        handleChecked(checked, item.color.toLowerCase());
                      }}
                    />
                  }
                />
              </Row>
            );
          })}
        </List>
      </Form>
    </AccordionCommon>
  );
}
