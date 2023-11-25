import Reviews from '@/app/components/reviews/reviews';

// export async function generateMetadata({ params }) {
//   const id = params.slug;

//   const product = await fetch(`http://localhost:3001/goods/${id}`).then(res =>
//     res.json()
//   );
//   return {
//     title: `Reviews about ${product.brand} tobacco`,
//     description: `Reviews of ${product.title} buyers `,
//   };
// }

export default function Review() {
  return (
    <>
      <Reviews />
    </>
  );
}
