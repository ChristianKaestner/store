import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useAuth } from '@/app/hooks/useAuth';
import { useCart } from '@/app/hooks/useCart';
import { toggleCart } from '@/app/redux/modal/slice';
import { addCart } from '@/app/redux/cart/operations';
import { cartAdd } from '@/app/redux/cart/slice';
import { Box } from '@mui/material';
import BuyButton from '@/app/components/products/productsItem/buyButton/buyButton';
import Price from '@/app/components/products/productsItem/price/price';
import ProductTitle from '../../products/productsItem/productTitle/productTitle';
import { PRODUCT_IMAGE_URL } from '@/app/lib/constants';
import { AsideBlock, ImageBlock } from './sideBar.styled';
import { RowCenter } from '@/app/lib/commonStyles';

export default function SideBar({ image, title, price, id, category }) {
  const { cartProducts } = useCart();
  const { isLogin } = useAuth();

  const dispatch = useDispatch();

  const handleCart = () => {
    if (isLogin) {
      const product = cartProducts.filter(product => product.id === id);
      if (!product.length) {
        const payload = { items: [{ productId: id, quantity: 1 }] };
        dispatch(addCart(payload));
      }
    } else {
      dispatch(cartAdd(id));
    }
    dispatch(toggleCart(true));
  };

  return (
    <AsideBlock elevation={3} component="aside">
      <ImageBlock>
        <Image
          src={PRODUCT_IMAGE_URL + image}
          width={80}
          height={80}
          alt={title + ' image'}
          priority="false"
          style={{ borderRadius: 4 }}
        />
      </ImageBlock>
      <Box sx={{ width: '100%' }}>
        <ProductTitle path={`/${category}/${id}`} title={title} />
        <RowCenter sx={{ gap: 1 }}>
          <Price price={price} component="p" />
          <BuyButton id={id} width={120} handleCart={handleCart} />
        </RowCenter>
      </Box>
    </AsideBlock>
  );
}
