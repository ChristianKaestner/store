import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortFilter() {
  const [sort, setSort] = useState('');

  const handleChange = e => {
    setSort(e.target.value);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', mb: 2 }}>
      <FormControl size="small" sx={{ width: 200 }}>
        <InputLabel id="sorting-filter-label">Sort</InputLabel>
        <Select
          labelId="sorting-filter-label"
          id="sorting-select"
          value={sort}
          label="Sort"
          onChange={handleChange}
          MenuProps={{
            PaperProps: {
              sx: {
                '& .MuiMenuItem-root.Mui-selected': {
                  bgcolor: 'transparent',
                },
                '& .MuiMenuItem-root:hover': {
                  bgcolor: 'primary.light',
                },
                '& .MuiMenuItem-root.Mui-selected:hover': {
                  bgcolor: 'primary.light',
                },
              },
            },
          }}
        >
          <MenuItem value={1}>default</MenuItem>
          <MenuItem value={2}>cheap to expensive</MenuItem>
          <MenuItem value={3}>expensive to cheap</MenuItem>
          <MenuItem value={4}>discount rate</MenuItem>
          <MenuItem value={5}>new products</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
