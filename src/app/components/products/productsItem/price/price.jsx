import { Text } from './price.styled';

export default function Price({ price, component = 'h4' }) {
  return <Text component={component}>{price}$</Text>;
}
