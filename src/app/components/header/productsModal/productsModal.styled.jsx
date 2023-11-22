import styled from '@emotion/styled';
import { Box, Tabs, Tab } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  bgcolor: theme.palette.primary.nutral,
  display: 'flex',
  height: 'calc(100% - 64px)',
  overflow: 'auto',
}));

export const TabsStyled = styled(Tabs)(({ theme }) => ({
  borderRight: 4,
  borderColor: 'divider',
  minWidth: 160,
}));

export const TabStyled = styled(Tab)({
  borderRadius: 4,
  fontSize: '1.25rem',
  alignItems: 'baseline',
});
