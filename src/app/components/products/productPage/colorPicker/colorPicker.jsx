import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Radio, RadioGroup } from '@mui/material';
import { FormControlLabel, FormControl, FormLabel } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ColorPicker({ colors }) {
  const [color, setColor] = useState(colors?.length ? colors[0] : null);

  const handleColorChange = e => {
    setColor(e.target.value);
  };

  return (
    <FormControl onChange={handleColorChange}>
      <FormLabel
        id="color-radio-button-label"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          mb: 2,
          cursor: 'text',
          textTransform: 'capitalize',
        }}
      >
        <Box component="span" sx={{ fontWeight: 500, color: 'primary.text' }}>
          Color:
        </Box>
        <Typography color="#000000"> {color}</Typography>
      </FormLabel>
      <RadioGroup
        aria-labelledby="color-radio-button-label"
        defaultValue={colors[0]}
        name="color"
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        {colors.map(color => {
          return (
            <FormControlLabel
              key={color}
              value={color}
              control={
                <Radio
                  icon={
                    <CircleIcon
                      fontSize="small"
                      style={{
                        stroke: '#747474',
                        fill: color,
                      }}
                    />
                  }
                  checkedIcon={
                    <CheckCircleIcon
                      fontSize="small"
                      style={{
                        stroke: color === 'white' ? '#747474' : 'transparent',
                        fill: color,
                      }}
                    />
                  }
                />
              }
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
