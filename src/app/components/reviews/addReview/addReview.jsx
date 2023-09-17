import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import { AddBlock, Text } from './addReview.styled';

export default function AddReview({ onWriteReview }) {
  return (
    <AddBlock elevation={3}>
      <Text component="h2">Leave a review for this product</Text>
      <Button
        variant="outlined"
        onClick={onWriteReview}
        startIcon={<CreateIcon />}
      >
        Write review
      </Button>
    </AddBlock>
  );
}
