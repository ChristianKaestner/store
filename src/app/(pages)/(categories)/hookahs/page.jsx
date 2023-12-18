import Breadcrumbs from '@/app/layout/breacrumbs/breadcrumbs';
import PageTitle from '@/app/components/pageTitle/pageTitle';
import HookahProducts from '@/app/components/products/hookahProducts/hookahProducts';
import { hookahsMetadata } from '@/app/lib/metadata';

export const metadata = hookahsMetadata;

export default function Hookahs() {
  return (
    <>
      <Breadcrumbs />
      <PageTitle title="Hookahs" />
      <HookahProducts />
    </>
  );
}
