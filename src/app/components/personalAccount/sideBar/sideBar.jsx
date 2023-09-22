'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Row } from '@/app/lib/commonStyles';
import AccountInfo from './accountInfo/accountInfo';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import { Container, MenuText, Tabs, Tab } from './sideBar.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { tmpUser } from '@/app/lib/tmpData';

export default function AccountAside() {
  const [page, setPage] = useState('settings');
  const { firstName, lastName, email } = tmpUser;
  const media = useMediaQuery('(min-width:900px)');
  const router = useRouter();
  const pathname = usePathname();
  const pathArr = pathname.split('/');

  useEffect(() => {
    setPage(pathArr[2]);
  }, [pathArr]);

  return (
    <Container component="aside">
      <AccountInfo name={firstName + ' ' + lastName} email={email} />
      <Tabs
        orientation={media ? 'vertical' : 'horizontal'}
        component="nav"
        variant="scrollable"
        value={page}
        aria-label="Personal account menu"
        TabIndicatorProps={{
          style: {
            backgroundColor: 'primary.light',
          },
        }}
      >
        <Tab
          value="settings"
          label={
            <Row>
              <ManageAccountsIcon sx={{ fontSize: '1.7rem' }} />
              <MenuText>Account settings</MenuText>
            </Row>
          }
          onClick={() => router.push('/profile/settings')}
        />

        <Tab
          value="orders"
          label={
            <Row>
              <ShoppingCartOutlinedIcon sx={{ fontSize: '1.7rem' }} />
              <MenuText>My orders</MenuText>
            </Row>
          }
          onClick={() => router.push('/profile/orders')}
        />

        <Tab
          value="favorites"
          label={
            <Row>
              <FavoriteIcon sx={{ fontSize: '1.7rem' }} />
              <MenuText>My Favorites</MenuText>
            </Row>
          }
          onClick={() => router.push('/profile/favorites')}
        />

        <Tab
          value="reviews"
          label={
            <Row>
              <CreateIcon sx={{ fontSize: '1.7rem' }} />
              <MenuText>My Reviews</MenuText>
            </Row>
          }
          onClick={() => router.push('/profile/reviews')}
        />
      </Tabs>
    </Container>
  );
}
