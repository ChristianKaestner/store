import Link from 'next/link';
import { Text } from './productTitle.styled';

export default function ProductTitle({ path, title }) {
  return (
    <Link href={path}>
      <Text>{title.toUpperCase()}</Text>
    </Link>
  );
}
