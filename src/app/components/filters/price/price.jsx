import { useState } from 'react';
import FilterCommon from '../common/filterCommon';
import { FormControl, TextField, Box, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import Slider from '@mui/material/Slider';
import LoopIcon from '@mui/icons-material/Loop';

const CustomSliderStyles = {
  '& .MuiSlider-thumb': {
    width: 20,
    height: 20,
    color: 'primary.light',
  },
  mx: 2,
  mt: 2,
};
//need to add price constraints
export default function PriceFilter({ from, to }) {
  const [inputFrom, setInputFrom] = useState(from);
  const [inputTo, setInputTo] = useState(to);

  const handleChange = (e, newValue) => {
    setInputFrom(newValue[0]);
    setInputTo(newValue[1]);
  };

  const handleChangeFrom = e => {
    setInputFrom(+e.target.value);
  };

  const handleChangeTo = e => {
    setInputTo(+e.target.value);
  };
  return (
    <FilterCommon title="Price">
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
          value={inputFrom}
          onChange={handleChangeFrom}
        />
        <RemoveIcon />
        <TextField
          id="outlined"
          label="to"
          type="text"
          sx={{ width: 90 }}
          size="small"
          value={inputTo}
          onChange={handleChangeTo}
        />
        <IconButton sx={{ ml: 1, color: 'primary.light' }}>
          <LoopIcon />
        </IconButton>
      </FormControl>
      <Box sx={{ width: '85%' }}>
        <Slider
          value={[inputFrom, inputTo]}
          onChange={handleChange}
          size="small"
          min={from}
          max={to}
          sx={CustomSliderStyles}
        />
      </Box>
    </FilterCommon>
  );
}
