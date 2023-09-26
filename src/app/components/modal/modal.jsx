import { IconButton, Box, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Modal as MuiModal } from '@mui/material';
import { ModalBlock } from './modal.styled';
import Fade from '@mui/material/Fade';

export default function Modal({
  children,
  open,
  close,
  title,
  width = '100%',
  height = 'auto',
  maxHeight = 'auto',
  position = 'center',
}) {
  const location = position => {
    if (position === 'center')
      return { top: '50%', left: '50%', x: '50%', y: '50%' };
    if (position === 'top') return { top: '72px', left: '50%', x: '50%', y: 0 };
  };

  return (
    <MuiModal
      open={open}
      onClose={close}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
    >
      <ModalBlock
        width={width}
        height={height}
        maxHeight={maxHeight}
        location={location(position)}
      >
        <IconButton
          sx={{ position: 'absolute', top: 0, right: 0, zIndex: 2 }}
          onClick={close}
        >
          <CloseIcon sx={{ fill: '#586ba4' }} />
        </IconButton>
        {title && (
          <Box>
            <Typography component="h2" sx={{ fontSize: 28, fontWeight: 500 }}>
              {title}
            </Typography>
            <Divider />
          </Box>
        )}
        {children}
      </ModalBlock>
    </MuiModal>
  );
}
