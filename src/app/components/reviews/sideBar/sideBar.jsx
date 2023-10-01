import Image from 'next/image';
import { Box } from '@mui/material';
import BuyButton from '@/app/components/products/productsItem/buyButton/buyButton';
import Price from '@/app/components/products/productsItem/price/price';
import ProductTitle from '../../products/productsItem/productTitle/productTitle';
import { AsideBlock, ImageBlock } from './sideBar.styled';
import { RowCenter } from '@/app/lib/commonStyles';

export default function SideBar({ image, title, price, id }) {
  return (
    <AsideBlock elevation={3} component="aside">
      <ImageBlock>
        <Image
          src={image}
          width={80}
          height={80}
          alt={title + ' image'}
          priority="false"
          style={{ borderRadius: 4 }}
        />
      </ImageBlock>
      <Box sx={{ width: '100%' }}>
        <ProductTitle path="/" title={title} />
        <RowCenter sx={{ gap: 1 }}>
          <Price price={price} component="p" />
          <BuyButton id={id} width={120} />
        </RowCenter>
      </Box>
    </AsideBlock>
  );
}
