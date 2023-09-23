import Image from 'next/image';
import { ColumnCenter } from '@/app/lib/commonStyles';
import OnNotify from '../../Notifications/onNotify';
export default function EmptyCart() {
  return (
    <ColumnCenter
      sx={{
        textAlign: 'center',
        marginTop: '16px',
      }}
    >
      <Image
        src="/cart.png"
        alt="shopping cart image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        style={{ height: '100%', zIndex: -1 }}
      />
      <OnNotify text="Your shopping cart is empty" />
    </ColumnCenter>
  );
}
