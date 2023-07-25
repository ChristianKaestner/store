import { Drawer, Box } from '@mui/material';

export default function Sidebar() {
  return (
    <aside
      style={{
        background: 'red',
        minWidth: '350px',
        height: '1000px',
        alignSelf: 'start',
        position: 'sticky',
        marginRight: '16px',
      }}
    ></aside>
  );
}
