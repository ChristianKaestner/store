import Icon from './icon';
import { LinkStyled, IconBlock, LogoText } from './logo.styled';

export default function Logo({ isMobile }) {
  return (
    <LinkStyled href="/">
      <IconBlock isMobile={isMobile}>
        <Icon />
      </IconBlock>
      <LogoText isMobile={isMobile}>S4U</LogoText>
    </LinkStyled>
  );
}
