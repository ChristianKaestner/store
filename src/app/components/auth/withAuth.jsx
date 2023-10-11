'use client';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/app/hooks/useAuth';

function withAuth(Component) {
  return () => {
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
}

withAuth.displayName = 'withAuth';
export default withAuth;

// export default function WithAuth({ children }) {
//   const { isLogin, isLoading } = useAuth();
//   const [isInitialLoad, setIsInitialLoad] = useState(true);

//   useEffect(() => {
//     if (isInitialLoad) {
//       setIsInitialLoad(false);
//       return;
//     }

//     if (!isLogin && !isLoading) {
//       redirect('/');
//     }
//   }, [isLogin, isLoading, isInitialLoad]);

//   return <>{isLogin && !isLoading && children}</>;
// }
