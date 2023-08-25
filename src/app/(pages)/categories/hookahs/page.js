'use client';

import { usePathname } from 'next/navigation';
import { Container, Box } from '@mui/material';
import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import Sidebar from '@/app/components/sidebar/sidebar';

export default function Hookahs() {
  const path = usePathname().split('/');
  path.splice(0, 1);

  return (
    <Container
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'column', px: 2, mt: 12, mb: 2 }}
    >
      <Breadcrumbs crumbs={path} />
      <PageTitle title="Hookahs" />
      <Sidebar />
    </Container>
  );
}
