import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { AddBlock, Text } from './addReview.styled';

export default function AddReview({ onWriteReview }) {
  return (
    <AddBlock elevation={3} sx={{ mb: 4 }}>
      <Text component="h2">Leave a review for this product</Text>
      <Button
        variant="outlined"
        onClick={onWriteReview}
        startIcon={<CreateIcon />}
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
        Write review
      </Button>
    </AddBlock>
  );
}
