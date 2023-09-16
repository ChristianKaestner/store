import { Row } from '@/app/utils/commonStyles';
import AccountInfo from './accountInfo/accountInfo';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import { Container, MenuText, Tabs, Tab } from './sideBar.styled';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AccountAside({ handleChange, value, user }) {
  const { firstName, lastName, email } = user;
  const media = useMediaQuery('(min-width:900px)');

  return (
    <Container component="aside">
      <AccountInfo name={firstName + ' ' + lastName} email={email} />
      <Tabs
        orientation={media ? 'vertical' : 'horizontal'}
        component="nav"
        variant="scrollable"
        value={value}
        aria-label="Personal account menu"
        TabIndicatorProps={{
          style: {
            backgroundColor: 'primary.light',
          },
        }}
      >
        <Tab
          label={
            <Row>
              <ManageAccountsIcon sx={{ fontSize: '1.7rem' }} />
              <MenuText>Account settings</MenuText>
            </Row>
          }
          onClick={handleChange.bind(this, 0)}
        />
        <Tab
          label={
            <Row>
              <ShoppingCartOutlinedIcon sx={{ fontSize: '1.7rem' }} />
              <MenuText>My purchases</MenuText>
            </Row>
          }
          onClick={handleChange.bind(this, 1)}
        />

        <Tab
          label={
            <Row>
              <FavoriteIcon sx={{ fontSize: '1.7rem' }} />
              <MenuText>My Favorites</MenuText>
            </Row>
          }
          onClick={handleChange.bind(this, 2)}
        />

        <Tab
          label={
            <Row>
              <CreateIcon sx={{ fontSize: '1.7rem' }} />
              <MenuText>My Reviews</MenuText>
            </Row>
          }
          onClick={handleChange.bind(this, 3)}
        />
      </Tabs>
    </Container>
  );
}
