import { Box, List, ListItem, Divider } from '@mui/material';
import { LinkStyled } from '../drawer.styled';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { categories } from '@/app/lib/tmpData';

export default function ProductsList() {
  return (
    <Box sx={{ width: '100%' }}>
      <List>
        {categories.map(category => {
          return (
            <ListItem key={category.id}>
              <LinkStyled href={`/${category.name}`}>
                <CatchingPokemonIcon sx={{ mr: 2 }} />
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </LinkStyled>
            </ListItem>
          );
        })}
      </List>
      <Divider orientation="horizontal" />
    </Box>
  );
}
