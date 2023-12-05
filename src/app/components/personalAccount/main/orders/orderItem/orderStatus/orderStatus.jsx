import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';

export default function OrderStatus({ status }) {
  return (
    <>
      {status === 'completed' && (
        <CheckCircleIcon sx={{ fontSize: '2rem', color: 'success.light' }} />
      )}
      {status === 'pending' && (
        <AccessTimeFilledIcon
          sx={{ fontSize: '2rem', color: 'warning.light' }}
        />
      )}
      {status === 'processing' && (
        <AccessTimeFilledIcon
          sx={{ fontSize: '2rem', color: 'warning.light' }}
        />
      )}
      {status === 'shipped' && (
        <LocalShippingIcon sx={{ fontSize: '2rem', color: 'primary.light' }} />
      )}
      {status === 'canceled' && (
        <CancelIcon sx={{ fontSize: '2rem', color: 'error.light' }} />
      )}
    </>
  );
}
