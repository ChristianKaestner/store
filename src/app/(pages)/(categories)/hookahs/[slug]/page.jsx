import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import ProductPage from '@/app/components/products/productPage/productPage';

export async function generateMetadata({ params }) {
  const id = params.slug;

  const product = await fetch(`http://localhost:3001/goods/${id}`).then(res =>
    res.json()
  );
  return {
    title: `Hookah brand ${product.brand}`,
    description: product.description,
  };
}

export default function Hookah() {
  return (
    <>
      <Breadcrumbs />
      <ProductPage />
    </>
  );
}
