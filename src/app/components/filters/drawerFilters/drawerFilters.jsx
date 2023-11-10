import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetFilters } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import { Drawer } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Sidebar from '../../sidebar/sidebar';
import CloseIcon from '@mui/icons-material/Close';
import { FilterBtn, DrawerBlock, StyledBox } from './drawerFilters.styled';
import { StyledBtn } from './drawerFilters.styled';
import { RowBetween } from '@/app/lib/commonStyles';

export default function DrawerFilters({ filter }) {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [clearBtn, setClearBtn] = useState(false);
  const dispatch = useDispatch();
  const filters = useFilters();

  useEffect(() => {
    Object.values(filters).forEach(filter => {
      if (filter.length > 0) {
        setClearBtn(true);
        return;
      }
    });
  }, [filters]);

  const handleClearFilters = () => {
    dispatch(resetFilters(false));
    setClearBtn(false);
  };

  return (
    <>
      <FilterBtn
        variant="contained"
        startIcon={<FilterAltIcon />}
        onClick={() => setFiltersOpen(true)}
      >
        Filters
      </FilterBtn>
      <Drawer
        variant="temporary"
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <DrawerBlock>
          <StyledBox>
            <RowBetween>
              <StyledBtn
                variant="text"
                startIcon={<ChevronLeftIcon />}
                onClick={() => setFiltersOpen(false)}
              >
                Filters
              </StyledBtn>
              {clearBtn && (
                <StyledBtn
                  variant="text"
                  endIcon={<CloseIcon />}
                  onClick={handleClearFilters}
                >
                  clear all
                </StyledBtn>
              )}
            </RowBetween>

            <Sidebar filter={filter} mobile={true} />
          </StyledBox>
        </DrawerBlock>
      </Drawer>
    </>
  );
}
