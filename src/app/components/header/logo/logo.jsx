import { Montserrat_Subrayada } from 'next/font/google';
import Icon from './icon';
import { LinkStyled, IconBlock, LogoText } from './logo.styled';

const montserrat = Montserrat_Subrayada({
  weight: '700',
  subsets: ['latin'],
});

export default function Logo({ isMobile }) {
  return (
    <LinkStyled href="/">
      <IconBlock isMobile={isMobile}>
        <Icon />
      </IconBlock>
      <LogoText isMobile={isMobile} className={montserrat.className}>
        SMOKEY
      </LogoText>
    </LinkStyled>
  );
}
