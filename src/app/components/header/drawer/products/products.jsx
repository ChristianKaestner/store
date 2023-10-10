import { Box, List } from '@mui/material';
import { LinkStyled } from '../drawer.styled';
import { ItemText, Item, ListStyled } from '../drawer.styled';
import { categories } from '../../../../lib/tmpData';

export default function ProductsList() {
  return (
    <Box sx={{ width: '100%' }}>
      <ListStyled>
        {categories.map(({ id, url, name }) => {
          return (
            <Item key={id}>
              <LinkStyled href={url}>
                <ItemText>
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </ItemText>
              </LinkStyled>
            </Item>
          );
        })}
      </ListStyled>
    </Box>
  );
}
