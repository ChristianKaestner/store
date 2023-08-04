import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

export default function ProductsModal() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: 'divider' }}
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
      <Tab label="Item Four" />
      <Tab label="Item Five" />
      <Tab label="Item Six" />
      <Tab label="Item Seven" />
    </Tabs>
  );
}
