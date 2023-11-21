import { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import ProductsItemModal from './productsItemModal/productsItemModal';
import { useGetProductTabsQuery } from '@/app/redux/services/products';

export default function ProductsModal({ handleCloseModal }) {
  const [value, setValue] = useState(0);
  const { data = [] } = useGetProductTabsQuery();

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
        {data.length > 0 &&
          data.map((category, index) => {
            return (
              <Tab
                onMouseEnter={handleChange.bind(this, index)}
                label={category.name}
                key={category.name}
                sx={{ borderRadius: 1 }}
              />
            );
          })}
      </Tabs>
      {data.length > 0 &&
        data.map((category, index) => {
          return (
            <ProductsItemModal
              key={category.name}
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
