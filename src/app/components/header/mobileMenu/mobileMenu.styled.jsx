import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const BurgerMenuBtn = styled(IconButton)(({ theme }) => ({
  marginRight: 8,
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

export const BurgerMenuIcon = styled(MenuOutlinedIcon)({
  fontSize: '2.5rem',
});
