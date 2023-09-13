import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDebounce } from 'use-debounce';
import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Typography } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import { Form, Row, RowCenter, Label, List } from '@/app/utils/commonStyles';

export default function ColorFilter({ items }) {
  const [checkedColor, setCheckedColor] = useState([]);
  const [debouncedChecked] = useDebounce(checkedColor, 1500);

  const { register } = useForm();

  const handleChecked = ({ target }) => {
    if (target.checked) {
      setCheckedColor([...checkedColor, target.value]);
    }
    if (!target.checked) {
      const filtred = checkedColor.filter(color => color !== target.value);
      setCheckedColor(filtred);
    }
  };
  useEffect(() => {
    if (!debouncedChecked.length) return;
    //update data by color
    console.log(debouncedChecked);
  }, [debouncedChecked]);

  return (
    <FilterCommon title="Color">
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, color }) => {
            return (
              <Row component="li" key={id}>
                <Label
                  control={
                    <Checkbox
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
