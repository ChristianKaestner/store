import { Box, Typography, Button } from '@mui/material';
import { RowBetween } from '../../../lib/commonStyles';

export default function ConfirmDelModal({ handleDelete, handleAbort }) {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ color: 'primary.dim' }}>
        Are you sure you want to delete your account? <br /> After deletion, all
        your data will be inaccessible.
      </Typography>
      <RowBetween sx={{ mt: 2 }}>
        <Button variant="contained" onClick={handleDelete}>
          delete account
        </Button>
        <Button variant="contained" onClick={handleAbort}>
          leave account
        </Button>
      </RowBetween>
    </Box>
  );
}
