import { useForm } from 'react-hook-form';
import { FormControl, OutlinedInput, Button } from '@mui/material';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm() {
  const { register, handleSubmit } = useForm();
  return (
    <FormControl
      variant="outlined"
      component="form"
      onChange={handleSubmit(data => console.log(data))}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        mr: 2,
      }}
    >
      <OutlinedInput
        placeholder="search..."
        type="search"
        aria-label="search items"
        {...register('seacrh')}
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
