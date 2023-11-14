import ProductPage from '@/app/components/products/productPage/productPage';

export async function generateMetadata({ params }) {
  const id = params.slug;

  const product = await fetch(
    `http://localhost:5000/api/products/id/${id}`
  ).then(res => res.json());
  return {
    title: product.title,
    description: product.description,
  };
}

export default function Bowl() {
  return (
    <>
      <ProductPage />
    </>
  );
}
