import Reviews from '@/app/components/reviews/reviews';

export async function generateMetadata({ params }) {
  const id = params.slug;

  const product = await fetch(
    `http://localhost:5000/api/products/id/${id}`
  ).then(res => res.json());
  return {
    title: `Smokey - Reviews about ${product.brand} charcoal`,
    description: `Reviews of ${product.title} buyers `,
  };
}

export default function Review() {
  return (
    <>
      <Reviews />
    </>
  );
}
