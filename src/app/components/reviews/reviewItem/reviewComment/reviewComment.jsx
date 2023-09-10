import { Paper, Typography, Divider, Box } from '@mui/material';

export default function ReviewComment({ comment }) {
  const { name, text, date } = comment;
  return (
    <Paper component="li" elevation={3} sx={{ width: '85%', mt: 2, p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography sx={{ fontSize: '1.25rem', fontWeight: 500 }}>
          {name}
        </Typography>
        <Typography sx={{ color: 'primary.neutral', mr: 2 }}>{date}</Typography>
      </Box>

      <Divider />
      <Typography sx={{ mt: 2 }}>{text}</Typography>
    </Paper>
  );
}
