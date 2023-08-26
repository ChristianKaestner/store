import { useState } from 'react';
import FilterCommon from '../common/filterCommon';
import { FormControl, Button, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import Slider from '@mui/material/Slider';

export default function PriceFilter() {
  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <FilterCommon title="price">
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        component="form"
      >
        <TextField
          id="outlined"
          label="from"
          type="text"
          sx={{ width: 90 }}
          size="small"
        />
        <RemoveIcon />
        <TextField
          id="outlined"
          label="to"
          type="text"
          sx={{ width: 90 }}
          size="small"
        />
        <Button
          variant="contained"
          sx={{ height: '100%', bgcolor: 'primary.light' }}
        >
          OK
        </Button>
      </FormControl>
      <Slider
        // getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </FilterCommon>
  );
}
