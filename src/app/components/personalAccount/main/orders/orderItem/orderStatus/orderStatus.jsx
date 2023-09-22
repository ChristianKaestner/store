import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';

export default function OrderStatus({ status }) {
  return (
    <>
      {status === 'Fulfilled' && (
        <CheckCircleIcon sx={{ fontSize: '2rem', color: 'success.light' }} />
      )}
      {status === 'Pending payment' && (
        <AccessTimeFilledIcon
          sx={{ fontSize: '2rem', color: 'warning.light' }}
        />
      )}
      {status === 'Pending delivery' && (
        <AccessTimeFilledIcon
          sx={{ fontSize: '2rem', color: 'warning.light' }}
        />
      )}
      {status === 'Order shipped' && (
        <LocalShippingIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
      )}
      {status === 'Rejected' && (
        <CancelIcon sx={{ fontSize: '2rem', color: 'error.light' }} />
      )}
    </>
  );
}
