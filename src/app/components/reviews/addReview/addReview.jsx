import { Paper, Typography, Button } from '@mui/material';

export default function AddReview({ onWriteReview }) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Typography component="h2" sx={{ fontSize: '1.25rem' }}>
        Leave a review for this product
      </Typography>
      <Button variant="outlined" onClick={onWriteReview}>
        Write review
      </Button>
    </Paper>
  );
}
