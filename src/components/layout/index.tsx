'use client';

import { usePathname } from 'next/navigation';
import Header from '../header';
import Sidebar from '../sidebar';
import { useMemo } from 'react';
import { SIGN_IN } from '@/utils/constant/routes';
import ContentLayout from './content-layout';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const pathName = usePathname();

  const isOnlyContentLayout = useMemo(() => pathName === SIGN_IN, [pathName]);

  return isOnlyContentLayout ? (
    <ContentLayout>{children}</ContentLayout>
  ) : (
    <div className='flex'>
      <div className='h-screen w-24 fixed top-0 left-0'>
        <Sidebar />
      </div>
      <div className='bg-[#f5f5fd] w-full p-10 ml-24'>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
