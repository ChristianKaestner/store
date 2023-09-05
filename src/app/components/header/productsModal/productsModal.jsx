import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ProductsItemModal from './productsItemModal/productsItemModal';
import { useGetCategoriesQuery } from '@/app/redux/services/categories';
import { categories } from '@/app/utils/tmpData';

export default function ProductsModal() {
  const [value, setValue] = useState(0);
  const { data = [] } = useGetCategoriesQuery();

  console.log(data);

  const handleChange = index => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 'calc(100% - 64px)',
        overflow: 'auto',
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        aria-label="Products menu"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {data.length &&
          data.map((category, index) => {
            return (
              <Tab
                onMouseEnter={handleChange.bind(this, index)}
                label={category.name}
                key={category.id}
              />
            );
          })}
      </Tabs>
      {data.length &&
        data.map((category, index) => {
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
