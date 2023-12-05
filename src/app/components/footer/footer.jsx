'use client';

import { CommonColumnDesk, CommonColumnMob } from './footerColumn/footerColumn';
import { SubscribeColumn, FollowUsColumn } from './footerColumn/footerColumn';
import { productsLink, supportLink, contactLink } from '../../lib/pagesLink';
import { BoxStyled, ContainerStyled } from './footer.styled';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Footer() {
  const media = useMediaQuery('(min-width:900px)');

  const handleSubscribe = data => {
    console.log(data);
  };

  return (
    <BoxStyled component="footer">
      <ContainerStyled maxWidth="xl">
        {media ? (
          <>
            <CommonColumnDesk title="Shop" pages={productsLink} />
            <SubscribeColumn handleSubscribe={handleSubscribe} />
            <CommonColumnDesk title="Support" pages={supportLink} />
            <CommonColumnDesk title="Contacts" pages={contactLink} />
          </>
        ) : (
          <>
            <CommonColumnMob title="Shop" pages={productsLink} />
            <CommonColumnMob title="Support" pages={supportLink} />
            <CommonColumnMob title="Contacts" pages={contactLink} />
            <SubscribeColumn handleSubscribe={handleSubscribe} />
          </>
        )}
        <FollowUsColumn />
      </ContainerStyled>
    </BoxStyled>
  );
}
