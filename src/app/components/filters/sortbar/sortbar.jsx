import { Row } from '@/app/lib/commonStyles';
import { Chip } from '@mui/material';

export default function Sortbar() {
  return (
    <Row component="ul">
      <Chip label="some filter" component="li" />
    </Row>
  );
}
