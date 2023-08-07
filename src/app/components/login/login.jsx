import { Box, Typography, Divider, InputLabel, TextField } from '@mui/material';
import { FormControl, OutlinedInput, Button } from '@mui/material';

export default function Login() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography>Log In</Typography>
      <Divider />
      <FormControl sx={{ mt: 2, width: '60%' }} component="form">
        <TextField required id="outlined-required" label="Email" />
        <TextField
          required
          id="outlined-required"
          label="Password"
          sx={{ mt: 2 }}
        />
        <Button variant="contained" sx={{ mt: 2, height: 48 }}>
          Log In
        </Button>
      </FormControl>
      <Divider orientation="vertical" flexItem />
    </Box>
  );
}
