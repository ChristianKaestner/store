import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import ProductPage from '@/app/components/products/productPage/productPage';
//need to define cats
export async function generateMetadata({ params }) {
  const id = params.slug;

  const product = await fetch(
    `http://localhost:5000/api/products/id/${id}`
  ).then(res => res.json());
  return {
    title: `Hookah - ${product.brand.brand}`,
    description: product.description,
  };
}

export default function Bowl() {
  return (
    <>
      <Breadcrumbs />
      <ProductPage />
    </>
  );
}
