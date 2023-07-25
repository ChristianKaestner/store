import { Box, List, ListItem } from '@mui/material';
import { LinkStyled } from '../drawer.styled';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const categories = [
  { id: 1, name: 'hookah' },
  { id: 2, name: 'tobaco' },
  { id: 3, name: 'coal' },
  { id: 4, name: 'bowl' },
  { id: 5, name: 'utils' },
];

export default function ProductsList() {
  return (
    <Box>
      <List>
        {categories.map(category => {
          return (
            <>
              <ListItem key={category.id}>
                <LinkStyled href={`/${category.name}`}>
                  <CatchingPokemonIcon sx={{ mr: 2 }} />
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                </LinkStyled>
              </ListItem>
            </>
          );
        })}
      </List>
    </Box>
  );
}
