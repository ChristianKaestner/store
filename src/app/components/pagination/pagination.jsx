import { BlockBtn, PaginationStyled } from './pagination.styled';
import LoopIcon from '@mui/icons-material/Loop';

export default function PaginationComponent({ handlePage, handleLoadMore }) {
  return (
    <>
      <BlockBtn>
        <Button
          startIcon={<LoopIcon />}
          sx={{ color: 'primary.dim' }}
          size="large"
          onClick={handleLoadMore}
        >
          Load more
        </Button>
      </BlockBtn>
      <PaginationStyled
        count={pagination}
        page={page}
        size="large"
        shape="rounded"
        onChange={(e, value) => handlePage(value)}
      />
    </>
  );
}
