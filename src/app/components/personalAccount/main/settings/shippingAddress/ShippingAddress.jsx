import { Paper, IconButton } from '@mui/material';
import { TableContainer, Table, TableRow, TableBody } from '@mui/material';
import { CellBold, CellNeutral, SubTitle } from '@/app/lib/commonStyles';
import { RowCenter } from '@/app/lib/commonStyles';
import EditIcon from '@mui/icons-material/Edit';

export default function ShippingAddress({ onClick, address }) {
  const { city, street, house, apartment } = address;
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        mt: 2,
        bgcolor: 'primary.main',
        zIndex: 1,
        opacity: 0.9,
      }}
    >
      <RowCenter>
        <SubTitle component="h2" sx={{ mr: 2 }}>
          Shipping address
        </SubTitle>
        <IconButton onClick={onClick}>
          <EditIcon sx={{ color: 'primary.dim' }} />
        </IconButton>
      </RowCenter>
      <TableContainer component={Paper} sx={{ mt: 2, bgcolor: 'primary.main' }}>
        <Table aria-label="purchase table">
          <TableBody>
            <TableRow>
              <CellNeutral>City:</CellNeutral>
              <CellBold align="left">{city}</CellBold>
            </TableRow>
            <TableRow>
              <CellNeutral>Street:</CellNeutral>
              <CellBold align="left">{street}</CellBold>
            </TableRow>
            <TableRow>
              <CellNeutral>House:</CellNeutral>
              <CellBold align="left">{house}</CellBold>
            </TableRow>
            <TableRow>
              <CellNeutral>Apartment:</CellNeutral>
              <CellBold align="left">{apartment}</CellBold>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
