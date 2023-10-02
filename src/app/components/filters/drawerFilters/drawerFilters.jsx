import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetFilters } from '@/app/redux/filters/slice';
import { useFilters } from '@/app/hooks/useFilters';
import { Box, Button, Drawer } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Sidebar from '../../sidebar/sidebar';
import CloseIcon from '@mui/icons-material/Close';

export default function DrawerFilters({category}) {
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
    <Box>
      <Button
        variant="contained"
        sx={{
          height: 40,
          width: { xs: 150, sm: 200 },
          bgcolor: 'primary.light',
          color: 'primary.dim',
        }}
        startIcon={<FilterAltIcon />}
        onClick={() => setFiltersOpen(true)}
      >
        Filters
      </Button>
      <Drawer
        variant="temporary"
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: 260,
            height: '100%',
            bgcolor: 'primary.main',
          }}
        >
          <Box sx={{ p: 2, height: '100%', overflowY: 'auto' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Button
                variant="text"
                startIcon={<ChevronLeftIcon />}
                sx={{
                  width: 'auto',
                  height: 40,
                  color: 'primary.dim',
                  '&:hover': { color: 'primary.accent' },
                }}
                onClick={() => setFiltersOpen(false)}
              >
                Filters
              </Button>
              {clearBtn && (
                <Button
                  variant="text"
                  endIcon={<CloseIcon />}
                  sx={{
                    width: 'auto',
                    height: 40,
                    color: 'primary.dim',
                    '&:hover': { color: 'primary.accent' },
                  }}
                  onClick={handleClearFilters}
                >
                  clear all
                </Button>
              )}
            </Box>

            <Sidebar category={category} mobile={true} />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
