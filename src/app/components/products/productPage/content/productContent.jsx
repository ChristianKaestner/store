'use client';
import { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Radio, RadioGroup } from '@mui/material';
import { FormControlLabel, FormControl, FormLabel } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ProductContent({ product }) {
  const { brand, title, description, colors, price } = product;
  const [color, setColor] = useState(colors.length ? colors[0] : null);
  const handleColorChange = e => {
    setColor(e.target.value);
  };
  return (
    <Box>
      <Paper elevation={5} sx={{ p: 2 }}>
        <Typography component="h1" sx={{ fontSize: 32, color: 'primary.main' }}>
          {title}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography component="h2" sx={{ fontWeight: 400 }}>
            <Box
              component="span"
              sx={{ fontWeight: 500, color: 'primary.main' }}
            >
              Brand:
            </Box>{' '}
            {brand}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            my: 2,
            alignItems: 'center',
          }}
        >
          {colors && (
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
                <Box
                  component="span"
                  sx={{ fontWeight: 500, color: 'primary.main' }}
                >
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
                                stroke:
                                  color === 'white' ? '#747474' : 'transparent',
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
          )}
        </Box>
        <Box>
          <Typography component="h3" sx={{ fontWeight: 400 }}>
            <Box
              component="span"
              sx={{ fontWeight: 500, color: 'primary.main' }}
            >
              Description:
            </Box>{' '}
            {description}
          </Typography>
        </Box>
      </Paper>

      <Paper sx={{ mt: 4 }}>
        <Typography>{price}</Typography>
      </Paper>
    </Box>
  );
}
