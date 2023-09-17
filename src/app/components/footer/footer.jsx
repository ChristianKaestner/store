'use client';
import { useState } from 'react';
import { Box, Container } from '@mui/material';
import { CommonColumnDesk, CommonColumnMob } from './footerColumn/footerColumn';
import { SubscribeColumn, FollowUsColumn } from './footerColumn/footerColumn';
import { productsLink, supportLink, contactLink } from '@/app/lib/pagesLink';
import InnerWidth from '@/app/components/innerWidth/innerWidth';

export default function Footer() {
  const isSSR = typeof window === 'undefined';
  const [windowWidth, setWindowWidth] = useState(
    isSSR ? 1200 : window.innerWidth
  );

  const handleSubscribe = data => {
    console.log(data);
  };

  return (
    <Box
      sx={{ width: '100%', bgcolor: 'primary.main', pb: 3 }}
      component="footer"
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          px: 3,
          pt: 3,
        }}
      >
        <InnerWidth handleInnerWidth={width => setWindowWidth(width)} />
        {windowWidth >= 900 ? (
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
      </Container>
    </Box>
  );
}
