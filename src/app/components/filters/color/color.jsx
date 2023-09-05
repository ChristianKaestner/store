import FilterCommon from '../accordion/accordionCommon';
import { FormControl, Checkbox, Box, Typography } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';

export default function ColorFilter({ items }) {
  const handleChecked = e => {
    console.log(e.target.checked);
    console.log(e.target.value);
    //need to fetch items
  };

  return (
    <FilterCommon title="Color">
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
          {items.map(({ id, color }) => {
            return (
              <Box
                component="li"
                key={id}
                sx={{ display: 'flex', flexDirection: 'row' }}
              >
                <FormControlLabel
                  control={
                    <Checkbox value={color} sx={{ p: 1 }} size="small" />
                  }
                  label={
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 1,
                      }}
                    >
                      <SquareIcon
                        fontSize="small"
                        style={{
                          stroke: 'black',
                          fill: color,
                        }}
                      />
                      <Typography>{color}</Typography>
                    </Box>
                  }
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
