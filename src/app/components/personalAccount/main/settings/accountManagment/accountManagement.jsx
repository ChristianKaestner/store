import { Paper } from '@mui/material';
import {
  RowCenter,
  SubTitle,
  RowBetween,
} from '../../../../../lib/commonStyles';
import AccountButton from './button/accountButton';

export default function AccountManagement({ onLogout, onDelete }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        mt: 2,
        bgcolor: 'primary.main',
        zIndex: 1,
        opacity: 0.9,
        mb: 4,
      }}
    >
      <RowCenter>
        <SubTitle component="h2" sx={{ mr: 2 }}>
          Account management
        </SubTitle>
      </RowCenter>
      <RowBetween sx={{ mt: 2 }}>
        <AccountButton text="logout" onClick={onLogout} icon="logout" />
        <AccountButton text="delete account" onClick={onDelete} icon="delete" />
      </RowBetween>
    </Paper>
  );
}
