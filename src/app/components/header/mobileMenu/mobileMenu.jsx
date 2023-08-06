import { IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function MobileMenu({ toggle }) {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={toggle}
      sx={{ mr: { xs: 1, sm: 2 }, pr: 0 }}
    >
      <MenuOutlinedIcon sx={{ fontSize: 40 }} />
    </IconButton>
  );
}
