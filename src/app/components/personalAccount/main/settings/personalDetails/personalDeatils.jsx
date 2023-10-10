import { Paper, IconButton } from '@mui/material';
import { TableContainer, Table, TableRow, TableBody } from '@mui/material';
import { CellBold, CellNeutral } from '../../../../../lib/commonStyles';
import { RowCenter, SubTitle } from '../../../../../lib/commonStyles';
import EditIcon from '@mui/icons-material/Edit';

export default function PersonalDetails({ onClick, user }) {
  const { firstName, lastName, phone, email } = user;

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        bgcolor: 'primary.main',
        zIndex: 1,
        opacity: 0.9,
      }}
    >
      <RowCenter>
        <SubTitle component="h2" sx={{ mr: 2 }}>
          Personal details
        </SubTitle>
        <IconButton onClick={onClick}>
          <EditIcon sx={{ color: 'primary.dim' }} />
        </IconButton>
      </RowCenter>

      <TableContainer component={Paper} sx={{ mt: 2, bgcolor: 'primary.main' }}>
        <Table aria-label="purchase table">
          <TableBody>
            <TableRow>
              <CellNeutral>First name:</CellNeutral>
              <CellBold align="left">{firstName}</CellBold>
            </TableRow>
            <TableRow>
              <CellNeutral>First name:</CellNeutral>
              <CellBold align="left">{lastName}</CellBold>
            </TableRow>
            <TableRow>
              <CellNeutral>Phone number:</CellNeutral>
              <CellBold align="left">{phone}</CellBold>
            </TableRow>
            <TableRow>
              <CellNeutral>Email:</CellNeutral>
              <CellBold align="left">{email}</CellBold>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
