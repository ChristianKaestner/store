import Animation from './animation';
import { Box } from '@mui/material';

export default function LoaderRedux() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Animation />
    </Box>
  );
}
