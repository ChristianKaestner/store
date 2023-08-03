import Link from 'next/link';
import { LinkItem, LinkText } from './footerLink.styled';

export default function FooterLink({ href, title }) {
  return (
    <LinkItem>
      <Link href={href}>
        <LinkText>{title}</LinkText>
      </Link>
    </LinkItem>
  );
}
