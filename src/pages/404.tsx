import { useRouter } from 'next/router';
import { FC } from 'react';
import { useEffect } from 'react';

export const Page_404: FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  });
  return null;
};

export default Page_404;
