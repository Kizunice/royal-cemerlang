'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 5000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });
  return (
    loading && (
      <div className="w-full h-full fixed top-0 left-0 bg-['#08001A'] opacity-15 z-50">
        <div className="flex justify-center items-center mt-[50vh]">
          <div className="loader"></div>
        </div>
      </div>
    )
  );
}
