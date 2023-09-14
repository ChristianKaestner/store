import { Typography } from '@mui/material';
import { Column, RowCenter } from '@/app/utils/commonStyles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export default function AccountInfo({ name, email }) {
  return (
    <RowCenter sx={{ bgcolor: 'primary.dim', p: 2, mb: 2, borderRadius: 1 }}>
      <Column>
        <AccountCircleOutlinedIcon
          sx={{ fontSize: '2.5rem', color: 'primary.light' }}
        />
      </Column>
      <Column sx={{ ml: 4 }}>
        <Typography sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
          {name}
        </Typography>
        <Typography sx={{ color: 'primary.neutral' }}>{email}</Typography>
      </Column>
    </RowCenter>
  );
}
