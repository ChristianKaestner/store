import { useForm } from 'react-hook-form';
import { FormControl, OutlinedInput, Button } from '@mui/material';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';

export default function SearchForm() {
  const { register, getValues } = useForm();

  const handleSearch = debounce(() => {
    //send request
    const values = getValues();
    console.log(values);
  }, 1000);

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
        type="search"
        aria-label="search items"
        {...register('seacrh', {
          onChange: handleSearch,
        })}
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
