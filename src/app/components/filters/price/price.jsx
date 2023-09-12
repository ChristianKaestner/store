import { useState } from 'react';
import FilterCommon from '../accordion/accordionCommon';
import RemoveIcon from '@mui/icons-material/Remove';
import LoopIcon from '@mui/icons-material/Loop';
import { Slider, IconButton, Box, PriceForm } from './price.styled';
import { InputProps } from '@/app/utils/commonStyles';

//problem with useForm =(
export default function PriceFilter({ items }) {
  const from = Math.min(...items);
  const to = Math.max(...items);

  const [inputFrom, setInputFrom] = useState(from);
  const [inputTo, setInputTo] = useState(to);

  const disabled =
    inputFrom < from || inputFrom > to || inputTo > to || inputTo < from;

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
    console.log(inputFrom, inputTo);
    // get products filtred by Price query
  };

  return (
    <FilterCommon title="Price">
      <PriceForm component="form">
        <InputProps
          err={inputFrom < from || inputFrom > to}
          id="from"
          label="from"
          type="number"
          size="small"
          value={inputFrom}
          onChange={handleChangeFrom}
          sx={{ width: 90 }}
        />
        <RemoveIcon />
        <InputProps
          err={inputTo > to || inputTo < from}
          id="to"
          label="to"
          type="number"
          size="small"
          value={inputTo}
          onChange={handleChangeTo}
          sx={{ width: 90 }}
        />

        <IconButton type="button" onClick={handleRefresh} disabled={disabled}>
          <LoopIcon />
        </IconButton>
      </PriceForm>
      <Box>
        <Slider
          value={[inputFrom, inputTo]}
          onChange={handleChange}
          size="small"
          min={from}
          max={to}
        />
      </Box>
    </FilterCommon>
  );
}

{
  /* <Form component="form" onSubmit={handleSubmit(data => console.log(data))}>
        <Controller
          control={control}
          name="from"
          defaultValue={from}
          render={({ field: { onChange, value } }) => (
            <Input
              err={value < from}
              id="from"
              label="from"
              type="number"
              size="small"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <RemoveIcon />
        <Controller
          control={control}
          name="to"
          defaultValue={to}
          render={({ field: { onChange, value } }) => (
            <Input
              err={value > to}
              id="to"
              label="to"
              type="number"
              size="small"
              value={value}
              onChange={onChange}
            />
          )}
        />
        <IconButton
          type="submit"
          onClick={handleRefresh}
          disabled={inputTo > to || inputFrom < from ? true : false}
        >
          <LoopIcon />
        </IconButton>
      </Form> */
}
