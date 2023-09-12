import FilterCommon from '../accordion/accordionCommon';
import { Checkbox, Typography } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import { Form, Row, RowCenter, Label, List } from '@/app/utils/commonStyles';

export default function ColorFilter({ items }) {
  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Color">
      <Form component="form">
        <List component="ul" sx={{ pl: 2 }}>
          {items.map(({ id, color }) => {
            return (
              <Row component="li" key={id}>
                <Label
                  control={
                    <Checkbox value={color} sx={{ p: 1 }} size="small" />
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
                  onClick={handleChecked}
                />
              </Row>
            );
          })}
        </List>
      </Form>
    </FilterCommon>
  );
}
