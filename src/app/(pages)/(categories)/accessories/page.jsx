import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import AccessoriesProducts from '@/app/components/products/accessoryProducts/accessoryProducts';
import { accessoriesMetadata } from '@/app/lib/metadata';

export const metadata = accessoriesMetadata;

export default function Accessories() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Accessories" />
      <AccessoriesProducts />
    </>
  );
}
