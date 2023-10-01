import { useState } from 'react';
import { Radio, Typography } from '@mui/material';
import { FormControlLabel, FormControl } from '@mui/material';
import { Label, BlockRadio, IconCircle } from './colorPicker.styled';
import { IconCircleChecked } from './colorPicker.styled';
import { Span } from '@/app/lib/commonStyles';

export default function ColorPicker({ colors }) {
  const [color, setColor] = useState(colors?.length ? colors[0] : null);

  const handleColorChange = e => {
    setColor(e.target.value);
  };

  return (
    <FormControl onChange={handleColorChange}>
      <Label id="color-radio-button-label" sx={{ color: 'primary.dim' }}>
        <Span component="span">Color:</Span>
        <Typography sx={{ color: 'primary.dim' }}> {color}</Typography>
      </Label>
      <BlockRadio
        aria-labelledby="color-radio-button-label"
        defaultValue={colors[0]}
        name="color"
      >
        {colors.map(color => {
          return (
            <FormControlLabel
              key={color}
              value={color}
              control={
                <Radio
                  icon={<IconCircle fontSize="small" color={color} />}
                  checkedIcon={
                    <IconCircleChecked fontSize="small" color={color} />
                  }
                />
              }
            />
          );
        })}
      </BlockRadio>
    </FormControl>
  );
}
