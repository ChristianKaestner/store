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

export default function PriceFilter({ from, to }) {
  const [inputFrom, setInputFrom] = useState(from);
  const [inputTo, setInputTo] = useState(to);

  const handleChange = (e, newValue) => {
    setInputFrom(newValue[0]);
    setInputTo(newValue[1]);
  };

  const handleChangeFrom = e => {
    const num = Number(e.target.value);
    if (isNaN(num)) return;
    setInputFrom(num);
  };

  const handleChangeTo = e => {
    const num = Number(e.target.value);
    if (isNaN(num)) return;
    setInputTo(num);
  };

  const handleRefresh = () => {
    // update items by price
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
          sx={{
            width: 90,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor:
                inputFrom < from ? 'primary.hot' : 'rgba(0, 0, 0, 0.23)',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: inputFrom < from ? 'primary.hot' : 'primary.light',
              },
            },
          }}
          size="small"
          value={inputFrom}
          onChange={handleChangeFrom}
        />
        <RemoveIcon />
        <TextField
          id="outlined"
          label="to"
          type="text"
          sx={{
            width: 90,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: inputTo > to ? 'primary.hot' : 'rgba(0, 0, 0, 0.23)',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: inputTo > to ? 'primary.hot' : 'primary.light',
              },
            },
          }}
          size="small"
          value={inputTo}
          onChange={handleChangeTo}
        />
        <IconButton
          sx={{
            ml: 1,
            color: 'primary.light',
          }}
          onClick={handleRefresh}
          disabled={inputTo > to || inputFrom < from ? true : false}
        >
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
