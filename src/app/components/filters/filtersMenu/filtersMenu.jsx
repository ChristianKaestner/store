'use client';
import { useMediaQuery } from '@mui/material';
import Sortbar from '../sortbar/sortbar';
import DrawerFilters from '../drawerFilters/drawerFilters';

export default function FiltersMenu({ category }) {
  const isDrawer = useMediaQuery('(max-width:1199px)');

  return (
    <>
      {isDrawer ? (
        <>
          <DrawerFilters category={category} />
          <Sortbar mobile={true} />
        </>
      ) : (
        <Sortbar />
      )}
    </>
  );
}
