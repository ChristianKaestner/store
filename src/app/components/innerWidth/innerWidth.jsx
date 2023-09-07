'use client';
import { useEffect } from 'react';

export default function InnerWidth({ handleInnerWidth }) {
  const isSSR = typeof window === 'undefined';

  useEffect(() => {
    const handleWindowResize = () => {
      if (!isSSR) {
        handleInnerWidth(window.innerWidth);
      }
    };
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
}
