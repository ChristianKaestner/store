'use client';
import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { CommonColumnDesk, CommonColumnMob } from './footerColumn/footerColumn';
import { SubscribeColumn, FollowUsColumn } from './footerColumn/footerColumn';
import { productsLink, supportLink, contactLink } from '@/app/utils/pagesLink';

export default function Footer() {
  const isSSR = typeof window === 'undefined';
  const [windowWidth, setWindowWidth] = useState(
    isSSR ? 1200 : window.innerWidth
  );

  useEffect(() => {
    const handleWindowResize = () => {
      if (!isSSR) {
        setWindowWidth(window.innerWidth);
      }
    };
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('first');
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
        {windowWidth >= 900 ? (
          <>
            <CommonColumnDesk title="Shop" pages={productsLink} />
            <SubscribeColumn handleSubmit={handleSubmit} />
            <CommonColumnDesk title="Support" pages={supportLink} />
            <CommonColumnDesk title="Contacts" pages={contactLink} />
          </>
        ) : (
          <>
            <CommonColumnMob title="Shop" pages={productsLink} />
            <CommonColumnMob title="Support" pages={supportLink} />
            <CommonColumnMob title="Contacts" pages={contactLink} />
            <SubscribeColumn handleSubmit={handleSubmit} />
          </>
        )}
        <FollowUsColumn />
      </Container>
    </Box>
  );
}
