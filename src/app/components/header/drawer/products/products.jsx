import { Box } from '@mui/material';
import { LinkStyled } from '../drawer.styled';
import { ItemText, Item, ListStyled } from '../drawer.styled';
import { categories } from '../../../../lib/utils';

export default function ProductsList({ handleDrawerToggle }) {
  return (
    <Box sx={{ width: '100%' }}>
      <ListStyled>
        {categories.map(({ id, url, name }) => {
          return (
            <Item key={id} onClick={handleDrawerToggle}>
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
