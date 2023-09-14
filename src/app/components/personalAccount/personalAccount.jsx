import { useState } from 'react';
import AccountAside from './sideBar/sideBar';
import AccountMain from './main/AccountMain';
import { Row } from '@/app/utils/commonStyles';

export default function PersonalAccount() {
  const [value, setValue] = useState(0);

  return (
    <Row>
      <AccountAside handleChange={index => setValue(index)} value={value} />
      <AccountMain value={value} />
    </Row>
  );
}
