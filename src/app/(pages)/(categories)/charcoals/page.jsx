import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import CoalProducts from '@/app/components/products/coalProducts/coalProducts';
import { coalsMetadata } from '@/app/lib/metadata';

export const metadata = coalsMetadata;

export default function Hookahs() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Сharcoals" />
      <CoalProducts />
    </>
  );
}
