'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();

  useEffect(() => {
    const redirect = async () => {
      await router.replace('/profile/settings');
    };

    redirect();
  }, [router]);

  return null;
}
