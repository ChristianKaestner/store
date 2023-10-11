'use client';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';

function withAuth(Component) {
  const WithAuthComponent = () => {
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const { isLogin, isLoading } = useAuth();

    useEffect(() => {
      if (isInitialLoad) {
        setIsInitialLoad(false);
        return;
      }

      if (!isLogin && !isLoading) {
        redirect('/');
      }
    }, [isLogin, isLoading, isInitialLoad]);

    return <>{isLogin && <Component />}</>;
    //  return <>{isLogin && !isLoading && <Component />}</>;
  };
  WithAuthComponent.displayName = `WithAuth(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WithAuthComponent;
}

export default withAuth;
