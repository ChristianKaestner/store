'use client';

import { useState } from 'react';
import { usePathname, useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/goods';
import { Container, Box, Divider } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import ProductPage from '@/app/components/products/productPage/productPage';
import InnerWidth from '@/app/components/innerWidth/innerWidth';

export default function Hookah() {
  const isSSR = typeof window === 'undefined';
  const [windowWidth, setWindowWidth] = useState(
    isSSR ? 1200 : window.innerWidth
  );
  const path = usePathname().split('/');
  path.splice(0, 1);
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);

  return (
    <>
      {!isLoading && (
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            px: 2,
            mt: 12,
            mb: 2,
          }}
        >
          <InnerWidth handleInnerWidth={width => setWindowWidth(width)} />
          <Breadcrumbs crumbs={path} />
          <PageTitle title={data.title} />
          {data && <ProductPage product={data} windowWidth={windowWidth} />}
        </Container>
      )}
    </>
  );
}
