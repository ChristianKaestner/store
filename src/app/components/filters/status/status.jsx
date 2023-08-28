import FilterCommon from '../accordion/accordionCommon';
import { FormControl, Checkbox, Box } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { status } from '@/app/utils/tmpData';

export default function StatusFilter() {
  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Status">
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
        component="form"
      >
        <Box
          component="ul"
          sx={{
            width: '100%',
            listStyle: 'none',
            pl: 2,
          }}
        >
          {status.length &&
            status.map(({ id, name }) => {
              return (
                <Box component="li" key={id}>
                  <FormControlLabel
                    control={
                      <Checkbox value={name} sx={{ p: 1 }} size="small" />
                    }
                    label={name}
                    onClick={handleChecked}
                    sx={{
                      width: '100%',
                      borderRadius: 1,
                      '&:hover': { bgcolor: 'primary.dim' },
                    }}
                  />
                </Box>
              );
            })}
        </Box>
      </FormControl>
    </FilterCommon>
  );
}
