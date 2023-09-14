import Image from 'next/image';
import { ColumnCenter } from '@/app/utils/commonStyles';
import OnNotify from '../../Notifications/onNotify';
export default function EmptyCart() {
  return (
    <ColumnCenter
      sx={{
        textAlign: 'center',
        margin: '64px auto 0',
      }}
    >
      <Image
        src="/cart.png"
        alt="image"
        width={400}
        height={300}
        priority="false"
      />
      <OnNotify text="Your shopping cart is empty" />
    </ColumnCenter>
  );
}
