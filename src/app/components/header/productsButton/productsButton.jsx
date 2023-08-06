import { Button } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';

export default function ProductsButton({ onOpenProductsModal }) {
  return (
    <Button
      variant="contained"
      startIcon={<AppsIcon />}
      sx={{
        height: 40,
        mr: 2,
        minWidth: 100,
        display: { xs: 'none', sm: 'flex' },
        bgcolor: 'primary.light',
      }}
      onClick={onOpenProductsModal}
    >
      Products
    </Button>
  );
}
