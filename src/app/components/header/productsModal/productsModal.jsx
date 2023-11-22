import { useState } from 'react';
import ProductsItemModal from './productsItemModal/productsItemModal';
import { useGetProductTabsQuery } from '@/app/redux/services/products';
import { Container, TabStyled, TabsStyled } from './productsModal.styled';

export default function ProductsModal({ handleCloseModal }) {
  const [value, setValue] = useState(0);
  const { data = [] } = useGetProductTabsQuery();

  const handleChange = index => {
    setValue(index);
  };

  return (
    <Container>
      <TabsStyled
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
      >
        {data.length > 0 &&
          data.map((category, index) => {
            return (
              <TabStyled
                onMouseEnter={handleChange.bind(this, index)}
                label={category.name}
                key={category.name}
              />
            );
          })}
      </TabsStyled>
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
    </Container>
  );
}
