import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addFilter } from '@/app/redux/filters/slice';
import { BlockBtn, PaginationStyled } from './pagination.styled';
import LoopIcon from '@mui/icons-material/Loop';
import { Button } from '@mui/material';

export default function PaginationComponent({
  page,
  limit,
  total,
  length,
  multiplier,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryParams = new URLSearchParams(Array.from(searchParams.entries()));

  const dispatch = useDispatch();

  const count =
    length <= limit ? Math.ceil(total / limit) : Math.ceil(total / length);

  const handlePage = value => {
    value === 1 ? queryParams.delete('page') : queryParams.set('page', value);

    setTimeout(() => {
      dispatch(addFilter({ filterName: 'page', filterValue: value }));
    }, 500);

    const search = decodeURIComponent(queryParams.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  };

  const handleLoadMore = () => {
    dispatch(
      addFilter({ filterName: 'multiplier', filterValue: multiplier + 1 })
    );
  };
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
        count={count}
        page={+page}
        size="large"
        shape="rounded"
        onChange={(e, value) => handlePage(value)}
      />
    </>
  );
}
