import { Paper, Typography, Divider, Box } from '@mui/material';

export default function ReviewComment({ comment }) {
  const { name, text, date } = comment;
  return (
    <Paper
      component="li"
      elevation={3}
      sx={{
        bgcolor: 'primary.main',
        width: '85%',
        mt: 2,
        p: 2,
        zIndex: 1,
        opacity: 0.9,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{ fontSize: '1.25rem', fontWeight: 500, color: 'primary.dim' }}
        >
          {name}
        </Typography>
        <Typography sx={{ color: 'primary.neutral', mr: 2 }}>{date}</Typography>
      </Box>

      <Divider />
      <Typography sx={{ mt: 2, color: 'primary.dim' }}>{text}</Typography>
    </Paper>
  );
}
