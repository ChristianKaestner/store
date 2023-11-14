import { Montserrat_Subrayada } from 'next/font/google';
import SvgIcon from './svgIcon';
import { LinkStyled, IconBlock, LogoText } from './logo.styled';

const montserrat = Montserrat_Subrayada({
  weight: '700',
  subsets: ['latin'],
});

export default function Logo({ isMobile, mediaMD }) {
  const shouldRender = !mediaMD ? isMobile && !mediaMD : true;
  return (
    <LinkStyled href="/">
      <IconBlock isMobile={isMobile}>
        <SvgIcon />
      </IconBlock>
      {shouldRender && (
        <LogoText isMobile={isMobile} className={montserrat.className}>
          SMOKEY
        </LogoText>
      )}
    </LinkStyled>
  );
}
