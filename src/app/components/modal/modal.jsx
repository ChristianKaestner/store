'use client';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Backdrop, ModalWindow } from './modal.styled';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton } from '@mui/material';

export default function Modal({ onClose, children }) {
  useEffect(() => {
    const keyDownEvent = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', keyDownEvent);

    return () => {
      window.removeEventListener('keydown', keyDownEvent);
    };
  }, [onClose]);

  const onCloseBackdrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <Backdrop onClick={onCloseBackdrop}>
      <ModalWindow>
        <IconButton
          sx={{ position: 'absolute', top: 0, right: 0 }}
          onClick={onClose}
        >
          <HighlightOffIcon sx={{ fill: '#000' }} />
        </IconButton>
        {children}
      </ModalWindow>
    </Backdrop>,
    document.body
  );
}
