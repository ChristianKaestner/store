import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortFilter() {
  const { control } = useForm();

  const handleChange = data => {
    console.log(data);
    // update data by filter
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', mb: 2 }}>
      <FormControl size="small" sx={{ width: 200 }}>
        <InputLabel id="sorting-filter-label">Sort</InputLabel>
        <Controller
          control={control}
          name="price"
          defaultValue={''}
          render={({ field: { onChange, value } }) => {
            return (
              <Select
                labelId="sorting-filter-label"
                id="sorting-select"
                value={value}
                label="Sort"
                onChange={e => {
                  onChange(e.target.value);
                  handleChange(e.target.value);
                }}
              >
                <MenuItem value="">
                  <em>default</em>
                </MenuItem>
                <MenuItem value={'cheap'}>cheap to expensive</MenuItem>
                <MenuItem value={'expensive'}>expensive to cheap</MenuItem>
                <MenuItem value={'discount'}>discount rate</MenuItem>
                <MenuItem value={'new'}>new products</MenuItem>
              </Select>
            );
          }}
        />
      </FormControl>
    </Box>
  );
}
