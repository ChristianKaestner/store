import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import TobaccoProducts from '@/app/components/products/tobaccoProducts/tobaccoProducts';
import { tobaccoMetadata } from '@/app/lib/metadata';

export const metadata = tobaccoMetadata;

export default function Tobacco() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Tobacco" />
      <TobaccoProducts />
    </>
  );
}
