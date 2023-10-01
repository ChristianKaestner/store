import { Box, Typography, Divider } from '@mui/material';
import { Modal as MuiModal } from '@mui/material';
import { ModalBlock, ButtonClose, IconClose } from './modal.styled';

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
    <MuiModal open={open} onClose={close} closeAfterTransition={true}>
      <ModalBlock
        width={width}
        height={height}
        maxHeight={maxHeight}
        location={location(position)}
      >
        <ButtonClose onClick={close}>
          <IconClose className="changeFill" />
        </ButtonClose>
        {title && (
          <Box>
            <Typography
              component="h2"
              sx={{ fontSize: 28, fontWeight: 500, color: 'primary.dim' }}
            >
              {title}
            </Typography>
            <Divider sx={{ bgcolor: 'primary.dim' }} />
          </Box>
        )}
        {children}
      </ModalBlock>
    </MuiModal>
  );
}
