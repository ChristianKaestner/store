import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ProductsItemModal from './productsItemModal/productsItemModal';
import { categories } from '@/app/utils/tmpData';

export default function ProductsModal() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: '100%',
        overflow: 'auto',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {categories &&
          categories.map(category => {
            return <Tab label={category.name} key={category.id} />;
          })}
      </Tabs>
      {categories &&
        categories.map((category, index) => {
          return (
            <ProductsItemModal
              key={category.id}
              value={value}
              index={index}
              category={category}
              subCategory={category.subCategory}
            />
          );
        })}
    </Box>
  );
}
