import { FormControl, OutlinedInput, Button } from '@mui/material';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm() {
  return (
    <FormControl
      variant="outlined"
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        mr: 2,
      }}
    >
      <OutlinedInput
        placeholder="search..."
        type="text"
        aria-label="search items"
        sx={{ flexGrow: 1, height: 40, pr: 0, background: '#fff' }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          <Button
            position="end"
            variant="contained"
            sx={{
              height: '100%',
              color: '#fff',
              bgcolor: 'primary.light',
            }}
          >
            Find
          </Button>
        }
      />
    </FormControl>
  );
}
