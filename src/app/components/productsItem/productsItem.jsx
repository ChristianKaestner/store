import { Card, CardHeader, CardMedia, CardContent } from '@mui/material';
import Image from 'next/image';

export default function ProductsItem() {
  return (
    <Card sx={{ width: 345 }}>
      <CardHeader title="Hookah Mia" />
      <Image src="/hookah_item.jpg" width={100} height={194} alt="image" />
      <CardContent />
    </Card>
  );
}
