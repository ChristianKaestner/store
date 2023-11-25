import { Container, BtnBlock, Text, BtnStyled } from './deleteReview.styled';

export default function DeleteReview({ onDelete, onAbort }) {
  return (
    <Container>
      <Text>Do you really want to delete the review?</Text>

      <BtnBlock>
        <BtnStyled variant="contained" onClick={onDelete}>
          Delete
        </BtnStyled>
        <BtnStyled variant="contained" onClick={onAbort}>
          Cancel
        </BtnStyled>
      </BtnBlock>
    </Container>
  );
}
