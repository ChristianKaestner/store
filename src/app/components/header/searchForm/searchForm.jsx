import { useState } from 'react';
import { useGetSuggestionQuery } from '@/app/redux/services/products';
import { useForm } from 'react-hook-form';
import { FormControl, OutlinedInput } from '@mui/material';
import { InputAdornment } from '@mui/material';
import SearchResult from '../searchResult/searchResult';
import SearchIcon from '@mui/icons-material/Search';
import debounce from 'lodash.debounce';
import { Box } from '@mui/material';

export default function SearchForm() {
  const [search, setSearch] = useState({ search: '' });
  const [showResult, setShowResult] = useState(false);
  const { data = [] } = useGetSuggestionQuery(search, { skip: !search.search });

  const isResultVisible = showResult && data.length > 0 && search.search !== '';

  const { register, getValues } = useForm();

  const handleSearch = debounce(() => {
    const values = getValues();
    setSearch(values);
  }, 500);

  const handleBlur = () => {
    setTimeout(() => {
      setShowResult(false);
    }, 200);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        mr: 2,
      }}
    >
      <FormControl
        variant="outlined"
        component="form"
        sx={{ width: '100%' }}
        onFocus={() => setShowResult(true)}
        onBlur={handleBlur}
        autoComplete="new-password"
      >
        <OutlinedInput
          placeholder="search..."
          type="text"
          autoComplete="new-password"
          {...register('search', {
            onChange: handleSearch,
          })}
          sx={{ flexGrow: 1, height: 40, pr: 0, background: '#fff' }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      {isResultVisible && <SearchResult products={data} />}
    </Box>
  );
}
