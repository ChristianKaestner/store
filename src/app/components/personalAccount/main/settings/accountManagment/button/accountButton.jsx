import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export default function AccountButton({ text, onClick, icon }) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      startIcon={icon === 'logout' ? <LogoutIcon /> : <PersonRemoveIcon />}
      sx={{
        zIndex: 1,
        color: 'primary.dim',
        borderColor: 'primary.dim',
        '&:hover': {
          borderColor: 'primary.light',
          backgroundColor: 'primary.dim',
          color: 'primary.light',
        },
      }}
    >
      {text}
    </Button>
  );
}
