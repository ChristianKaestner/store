import Link from 'next/link';
import { List, ListItem } from '@mui/material';
import { Container, ListItemStyled } from './searchResult.styled';

export default function SearchResult({ products }) {
  return (
    <Container>
      <List>
        {products.map(product => {
          const { id, title, category } = product;
          return (
            <ListItem disablePadding key={id}>
              <Link href={`/${category}/${id}`} style={{ width: '100%' }}>
                <ListItemStyled primary={title} secondary={`in ${category}`} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
}
