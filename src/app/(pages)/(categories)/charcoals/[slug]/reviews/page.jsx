import Reviews from '@/app/components/reviews/reviews';
import { SERVER_URL, PRODUCT_IMAGE_URL } from '@/app/lib/constants';

export async function generateMetadata({ params }) {
  const id = params.slug;

  const product = await fetch(`${SERVER_URL}products/id/${id}`).then(res =>
    res.json()
  );
  return {
    title: `Smokey - Reviews about ${product.brand.brand} charcoals`,
    description: `Reviews of ${product.title} buyers `,
    openGraph: {
      title: `Smokey - Reviews about ${product.brand.brand} hookah charcoal`,
      description: `Reviews of ${product.title} buyers`,
      url: `https://smokey.top/charcoals/${id}/reviews`,
      siteName: 'Smokey',
      images: [
        {
          url: PRODUCT_IMAGE_URL + product.images[0],
          width: 600,
          height: 800,
          alt: product.brand.brand,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default function Review() {
  return (
    <>
      <Reviews />
    </>
  );
}
