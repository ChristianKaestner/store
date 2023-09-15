import { useState } from 'react';
import AccountAside from './sideBar/sideBar';
import AccountMain from './main/AccountMain';
import { Row } from '@/app/utils/commonStyles';
import { tmpUser } from '@/app/utils/tmpData';


export default function PersonalAccount() {
  const [value, setValue] = useState(0);

  return (
    <Row>
      <AccountAside
        handleChange={index => setValue(index)}
        value={value}
        user={tmpUser}
      />
      <AccountMain value={value} user={tmpUser} />
    </Row>
  );
}
