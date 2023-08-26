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
                  backgroundColor: 'primary.light',
                },
                '& .MuiMenuItem-root:hover': {
                  backgroundColor: 'primary.light',
                },
                '& .MuiMenuItem-root.Mui-selected:hover': {
                  backgroundColor: 'primary.light',
                },
              },
            },
          }}
        >
          <MenuItem value="">
            <em>default</em>
          </MenuItem>
          <MenuItem value={2}>cheap to expensive</MenuItem>
          <MenuItem value={3}>expensive to cheap</MenuItem>
          <MenuItem value={4}>discount rate</MenuItem>
          <MenuItem value={5}>new products</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

// export default function SortFilter() {
//   const [age, setAge] = React.useState('');

//   const handleChange = event => {
//     setAge(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, minWidth: 80 }}>
//         <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
//         <Select
//           labelId="demo-simple-select-autowidth-label"
//           id="demo-simple-select-autowidth"
//           value={age}
//           onChange={handleChange}
//           autoWidth
//           label="Age"
//         >
// <MenuItem value="">
//   <em>None</em>
// </MenuItem>
//           <MenuItem value={10}>Twenty</MenuItem>
//           <MenuItem value={21}>Twenty one</MenuItem>
//           <MenuItem value={22}>Twenty one and a half</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }
