import Link from 'next/link';
import { Box } from '@mui/material';
import { Container, CatTitle, ItemsBlock } from './productsItemModal.styled';
import { ItemText, ColumnTitle, Column } from './productsItemModal.styled';

export default function ProductsItemModal({
  value,
  index,
  category,
  handleCloseModal,
}) {
  return (
    <Container
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      <Link
        href={category.name}
        onClick={handleCloseModal}
        style={{ textAlign: 'center' }}
      >
        <CatTitle>ALL {category.name.toUpperCase()}</CatTitle>
      </Link>
      {value === index && (
        <ItemsBlock>
          {category.brands.length > 0 && (
            <Column component="ul">
              <ColumnTitle component="li">BRANDS</ColumnTitle>
              {category.brands.map(item => {
                const brand = item.toLowerCase().split(' ').join('+');
                return (
                  <Box component="li" key={item}>
                    <Link
                      href={`/${category.name}?brand=${brand}`}
                      onClick={handleCloseModal}
                    >
                      <ItemText>{item.toUpperCase()}</ItemText>
                    </Link>
                  </Box>
                );
              })}
            </Column>
          )}
          {category?.colors?.length > 0 && (
            <Column component="ul">
              <ColumnTitle component="li">COLORS</ColumnTitle>
              {category.colors.map(item => {
                const color = item.toLowerCase().split(' ').join('+');
                return (
                  <Box component="li" key={item}>
                    <a
                      href={`/${category.name}?color=${color}`}
                      onClick={handleCloseModal}
                    >
                      <ItemText>{item.toUpperCase()}</ItemText>
                    </a>
                  </Box>
                );
              })}
            </Column>
          )}
          {category?.hookahSizes?.length > 0 && (
            <Column component="ul">
              <ColumnTitle component="li">SIZE</ColumnTitle>
              {category.hookahSizes.map(item => {
                const size = item.toLowerCase();
                return (
                  <Box component="li" key={item}>
                    <a
                      href={`/${category.name}?size=${size}`}
                      onClick={handleCloseModal}
                    >
                      <ItemText>{item.toUpperCase()}</ItemText>
                    </a>
                  </Box>
                );
              })}
            </Column>
          )}
          {category?.flavors?.length > 0 && (
            <Column component="ul">
              <ColumnTitle component="li">FLAVOR</ColumnTitle>
              {category.flavors.map(item => {
                const flavor = item.toLowerCase().split(' ').join('+');
                return (
                  <Box component="li" key={item}>
                    <a
                      href={`/${category.name}?flavor=${flavor}`}
                      onClick={handleCloseModal}
                    >
                      <ItemText>{item.toUpperCase()}</ItemText>
                    </a>
                  </Box>
                );
              })}
            </Column>
          )}
          {category?.tobaccoWeights?.length > 0 && (
            <Column component="ul">
              <ColumnTitle component="li">WEIGHT</ColumnTitle>
              {category.tobaccoWeights.map(item => {
                return (
                  <Box component="li" key={item}>
                    <a
                      href={`/${category.name}?weight=${item}`}
                      onClick={handleCloseModal}
                    >
                      <ItemText>{item}</ItemText>
                    </a>
                  </Box>
                );
              })}
            </Column>
          )}
          {category?.coalSizes?.length > 0 && (
            <Column component="ul">
              <ColumnTitle component="li">SIZE</ColumnTitle>
              {category.coalSizes.map(item => {
                return (
                  <Box component="li" key={item}>
                    <a
                      href={`/${category.name}?size=${item}`}
                      onClick={handleCloseModal}
                    >
                      <ItemText>{item}</ItemText>
                    </a>
                  </Box>
                );
              })}
            </Column>
          )}
          {category?.coalWeights?.length > 0 && (
            <Column component="ul">
              <ColumnTitle component="li">WEIGHT</ColumnTitle>
              {category.coalWeights.map(item => {
                return (
                  <Box component="li" key={item}>
                    <a
                      href={`/${category.name}?weight=${item}`}
                      onClick={handleCloseModal}
                    >
                      <ItemText>{item}</ItemText>
                    </a>
                  </Box>
                );
              })}
            </Column>
          )}
          {category?.types?.length > 0 && (
            <Column component="ul">
              <ColumnTitle component="li">TYPE</ColumnTitle>
              {category.types.map(item => {
                const type = item.toLowerCase().split(' ').join('+');
                return (
                  <Box component="li" key={item}>
                    <a
                      href={`/${category.name}?type=${type}`}
                      onClick={handleCloseModal}
                    >
                      <ItemText>{item.toUpperCase()}</ItemText>
                    </a>
                  </Box>
                );
              })}
            </Column>
          )}
        </ItemsBlock>
      )}
    </Container>
  );
}
