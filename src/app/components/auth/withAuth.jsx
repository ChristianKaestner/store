'use client';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';

export default function withAuth(Component) {
  return () => {
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const { isLogin, isLoading } = useAuth();

    useEffect(() => {
      if (isInitialLoad) {
        setIsInitialLoad(false);
        return;
      }

      if (!isLogin && !isLoading) {
        console.log('redirect');
        redirect('/');
      }
    }, [isLogin, isLoading]);

    return <>{isLogin && !isLoading && <Component />}</>;
  };
}
