import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addFilter, removeFilter } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import AccordionCommon from '../accordion/accordionCommon';
import { Checkbox, Typography } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import { Form, Row, RowCenter, Label, List } from '@/app/lib/commonStyles';
import { visuallyHidden } from '@mui/utils';

export default function ColorFilter({ items }) {
  const { control, getValues } = useForm();
  const { color } = useFilters();
  const dispatch = useDispatch();
  const formValues = getValues('color');
  console.log(color);
  return (
    <AccordionCommon title="Color">
      <Typography component="h3" sx={visuallyHidden}>
        Search by color
      </Typography>
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          <Controller
            name="color"
            control={control}
            defaultValue={color}
            render={({ field: { onChange, value } }) => {
              return (
                <>
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
                              <Typography>{item.color}</Typography>
                            </RowCenter>
                          }
                          control={
                            <Checkbox
                              value={color}
                              checked={color.includes(item.color)}
                              sx={{ p: 1 }}
                              size="small"
                              onChange={(e, checked) => {
                                if (checked) {
                                  onChange([...value, e.target.value]);
                                  dispatch(
                                    addFilter({
                                      filterName: 'color',
                                      filterValue: item.color,
                                    })
                                  );
                                } else {
                                  onChange(
                                    value.filter(
                                      value => value !== e.target.value
                                    )
                                  );
                                  dispatch(
                                    removeFilter({
                                      filterName: 'color',
                                      filterValue: item.color,
                                    })
                                  );
                                }
                                // handleChecked(e, checked);
                              }}
                            />
                          }
                        />
                      </Row>
                    );
                  })}
                </>
              );
            }}
          />
        </List>
      </Form>
    </AccordionCommon>
  );
}
