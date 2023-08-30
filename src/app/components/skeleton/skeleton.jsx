import Grid from '@mui/material/Unstable_Grid2';
import { Skeleton as MuiSkeleton } from '@mui/material';

export default function Skeleton({ length }) {
  const arr = Array.from(Array(length).keys());

  return (
    <>
      {length &&
        arr.map(item => {
          return (
            <Grid xs={12} sm={6} md={4} lg={3} component="li" key={item}>
              <MuiSkeleton
                variant="rectangular"
                height={414}
                sx={{ borderRadius: 1 }}
              />
            </Grid>
          );
        })}
    </>
  );
}
