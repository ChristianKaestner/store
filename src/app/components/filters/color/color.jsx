import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Typography } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import { Form, Row, RowCenter, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function ColorFilter({ items }) {
  const { color } = useFilters();
  const dispatch = useDispatch();

  const handleChecked = (checked, curentColor) => {
    checked
      ? dispatch(
          addFilter({
            filterName: 'color',
            filterValue: curentColor,
          })
        )
      : dispatch(
          removeFilter({
            filterName: 'color',
            filterValue: curentColor,
          })
        );
  };

  return (
    <AccordionCommon title="Color">
      <Typography component="h3" sx={visuallyHidden}>
        Search by color
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(item => {
            return (
              <Row component="li" key={item.id}>
                <Label
                  label={
                    <RowCenter sx={{ gap: 1 }}>
                      <SquareIcon
                        fontSize="small"
                        style={{
                          stroke: '#000',
                          fill: item.color,
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
