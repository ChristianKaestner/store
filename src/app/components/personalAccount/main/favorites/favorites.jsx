'use client';

import PageTitle from '@/app/components/pageTitle/pageTitle';
import ProductsList from '@/app/components/products/productsList/productsList';
import { useGetAllGoodsQuery } from '@/app/redux/services/goods';
import { useCart } from '@/app/hooks/useCart';
import { useMediaQuery } from '@mui/material';
import { profileFavoritePerRow } from '@/app/lib/functions';
import withAuth from '@/app/components/auth/withAuth';
import { tmpUser } from '@/app/lib/tmpData';

function AccountFavorites() {
  const { favorites } = tmpUser;
  const { data = [], isLoading } = useGetAllGoodsQuery();
  const { cart } = useCart();
  const favoritesGoods = data.filter(product => favorites.includes(product.id));
  const lg = useMediaQuery('(min-width:1200px)');
  const md = useMediaQuery('(min-width:600px)');
  const sm = useMediaQuery('(min-width:600px)');
  const width = profileFavoritePerRow(lg, md, sm);

  return (
    <>
      <PageTitle title="Favorites goods" />
      <ProductsList
        goods={favoritesGoods}
        isLoading={isLoading}
        cart={cart}
        skeleton={12}
        width={width}
      />
    </>
  );
}

AccountFavorites.displayName = 'AccountFavorites';
// export default withAuth(AccountFavorites);
export const AccountFavoritesWithAuth = withAuth(AccountFavorites);
