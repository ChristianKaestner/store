import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getSearchParams } from '@/app/lib/functions';
import { FilterBlock, FilterBtn, IconClose } from './sortbar.styled';
import { Box } from '@mui/material';
import { TextBold } from '@/app/lib/commonStyles';

export default function Sortbar() {
  const filtersKey = [
    'brand',
    'color',
    'price',
    'size',
    'status',
    'type',
    'weight',
    'flavor',
  ];
  const filters = [];
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = new URLSearchParams(Array.from(searchParams.entries()));

  filtersKey.forEach(key => {
    const param = getSearchParams(searchParams, key);
    if (param.length) {
      param.forEach(n => filters.push({ name: key, value: n }));
    }
  });
  console.log(filters);
  const handleDelete = e => {
    const name = e.currentTarget.id;
    const value = e.currentTarget.textContent;
    const param = current.get(name);
    const paramArray = param.split(',');
    if (paramArray.includes(value)) {
      paramArray.splice(paramArray.indexOf(value), 1);
    }
    if (paramArray.length > 0) {
      current.set(name, paramArray.join(','));
    } else {
      current.delete(name);
    }
    const search = decodeURIComponent(current.toString());
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`, { scroll: false });
  };

  const handleDeleteAll = () => {
    router.push(pathname, { scroll: false });
  };

  return (
    <Box>
      {filters.length > 0 && (
        <FilterBlock component="ul" sx={{ gap: 1, flexWrap: 'wrap' }}>
          <TextBold>30 products found</TextBold>
          <FilterBtn
            variant="outlined"
            endIcon={<IconClose />}
            component="li"
            onClick={handleDeleteAll}
          >
            clear all
          </FilterBtn>

          {filters.map(({ name, value }) => {
            return (
              <FilterBtn
                key={value}
                id={name}
                variant="outlined"
                endIcon={<IconClose />}
                component="li"
                onClick={handleDelete}
              >
                {value}
              </FilterBtn>
            );
          })}
        </FilterBlock>
      )}
    </Box>
  );
}
