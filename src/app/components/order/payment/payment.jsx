import Image from 'next/image';
import { Box } from '@mui/material';
import { TextTitle } from '../order.styled';

export default function Payment() {
  return (
    <Box sx={{ position: 'relative', height: '90%', mt: 1 }}>
      <TextTitle>Nothing here yet, but it&apos;s a work in progress </TextTitle>
      <Image src={'/progress.png'} alt="in progress" sizes="100%" fill />
    </Box>
  );
}
