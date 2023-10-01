'use client';

import { Box, Container } from '@mui/material';
import { CommonColumnDesk, CommonColumnMob } from './footerColumn/footerColumn';
import { SubscribeColumn, FollowUsColumn } from './footerColumn/footerColumn';
import { productsLink, supportLink, contactLink } from '@/app/lib/pagesLink';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Footer() {
  const media = useMediaQuery('(min-width:900px)');

  const handleSubscribe = data => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'primary.main',
        pb: 3,
        zIndex: 1,
        opacity: 0.9,
      }}
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
      </Container>
    </Box>
  );
}
