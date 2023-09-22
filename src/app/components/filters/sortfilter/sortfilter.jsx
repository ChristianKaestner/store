import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getSearchParams } from '@/app/lib/functions';
import { useForm, Controller } from 'react-hook-form';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortFilter() {
  const { control } = useForm();

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const paramsSort = getSearchParams(searchParams, 'sort');
  const defaultValue = paramsSort ? paramsSort : '';

  const handleChange = value => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (value) {
      current.set('sort', value);
    } else {
      current.delete('sort');
    }
    const search = decodeURIComponent(current.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });

    // update data by filter
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'end', mb: 2 }}>
      <FormControl size="small" sx={{ width: 200 }}>
        <InputLabel id="sorting-filter-label">Sort</InputLabel>
        <Controller
          control={control}
          name="price"
          defaultValue={defaultValue}
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
                <MenuItem value={'cheap'}>cheap</MenuItem>
                <MenuItem value={'expensive'}>expensive</MenuItem>
                <MenuItem value={'new'}>new</MenuItem>
                <MenuItem value={'sale'}>sale</MenuItem>
              </Select>
            );
          }}
        />
      </FormControl>
    </Box>
  );
}
