import FilterCommon from '../common/filterCommon';
import { FormControl, Checkbox } from '@mui/material';
import { FormControlLabel, FormGroup } from '@mui/material';
import { weight } from '@/app/utils/tmpData';

export default function WeightFilter() {
  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Weight">
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}
        component="form"
      >
        <FormGroup
          component="ul"
          sx={{
            flexWrap: 'nowrap',
            width: '100%',
            height: 200,
            overflowY: 'auto',
            overflowX: 'hidden',
            listStyle: 'none',
            mt: 2,
            pl: 2,
          }}
        >
          {weight.length &&
            weight.map(({ id, gram }) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      value={gram}
                      sx={{ p: 1 }}
                      size="small"
                      key={id}
                    />
                  }
                  label={gram}
                  onClick={handleChecked}
                  sx={{
                    width: '100%',
                    borderRadius: 1,
                    '&:hover': { bgcolor: 'primary.dim' },
                  }}
                />
              );
            })}
        </FormGroup>
      </FormControl>
    </FilterCommon>
  );
}
