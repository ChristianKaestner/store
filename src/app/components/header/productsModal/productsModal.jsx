import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ProductsItemModal from './productsItemModal/productsItemModal';
import { useGetCategoriesQuery } from '@/app/redux/services/categories';

export default function ProductsModal({ handleCloseModal }) {
  const [value, setValue] = useState(0);
  const { data = [] } = useGetCategoriesQuery();

  const handleChange = index => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'primary.nutral',
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
        TabIndicatorProps={{
          sx: {
            backgroundColor: 'primary.accent',
            borderRadius: 4,
          },
        }}
        sx={{ borderRight: 1, borderColor: 'divider', minWidth: 160 }}
      >
        {data.length &&
          data.map((category, index) => {
            return (
              <Tab
                onMouseEnter={handleChange.bind(this, index)}
                label={category.name}
                key={category.id}
                sx={{ borderRadius: 1 }}
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
              handleCloseModal={handleCloseModal}
            />
          );
        })}
    </Box>
  );
}
