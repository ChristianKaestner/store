import { Column, Row } from '@/app/utils/commonStyles';
import AccountInfo from './accountInfo/accountInfo';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import { MenuText, Tabs, Tab } from './sideBar.styled';

export default function AccountAside({ handleChange, value }) {
  return (
    <Column
      component="aside"
      sx={{
        width: '20%',
        mr: 2,
      }}
    >
      <AccountInfo name="Vladyslav Rohalov" email="example@email.com" />
      <Tabs
        orientation="vertical"
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
    </Column>
  );
}
