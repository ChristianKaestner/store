import { Box } from '@mui/material';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import ProductsList from '@/app/components/products/productsList/productsList';
import { useGetAllGoodsQuery } from '@/app/redux/services/goods';
import { useCart } from '@/app/hooks/useCart';

export default function AccountFavorites({ favorites }) {
  const { data = [], isLoading } = useGetAllGoodsQuery();
  const { cart } = useCart();
  const favoritesGoods = data.filter(product => favorites.includes(product.id));

  return (
    <Box sx={{ px: 2 }}>
      <PageTitle title="Favorites goods" />
      <ProductsList
        goods={favoritesGoods}
        isLoading={isLoading}
        cart={cart}
        lgPerPage={3}
        skeleton={12}
        favorites={favorites}
      />
    </Box>
  );
}
