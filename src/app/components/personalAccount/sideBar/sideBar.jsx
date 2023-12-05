'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';
import AccountInfo from './accountInfo/accountInfo';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Loader from '@/app/components/loading/loaderBackdrop';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import { Container, MenuText, Tabs, Tab } from './sideBar.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Row } from '../../../lib/commonStyles';

export default function AccountAside() {
  const [page, setPage] = useState('settings');
  const { user, isLoading } = useAuth();
  const media = useMediaQuery('(min-width:900px)');
  const router = useRouter();
  const pathname = usePathname();
  const pathArr = pathname.split('/');

  useEffect(() => {
    setPage(pathArr[2]);
  }, [pathArr]);

  return (
    <>
      {!isLoading && (
        <Container component="aside">
          <AccountInfo
            name={user.firstName + ' ' + user.lastName}
            email={user.email}
          />
          <Tabs
            orientation={media ? 'vertical' : 'horizontal'}
            component="nav"
            variant="scrollable"
            value={page}
            aria-label="Personal account menu"
            TabIndicatorProps={{
              sx: {
                backgroundColor: 'primary.accent',
                borderRadius: 4,
              },
            }}
          >
            <Tab
              value="settings"
              label={
                <Row>
                  <ManageAccountsIcon sx={{ fontSize: '1.7rem' }} />
                  <MenuText>Profile settings</MenuText>
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
      )}
      <Loader isLoading={isLoading} />
    </>
  );
}
