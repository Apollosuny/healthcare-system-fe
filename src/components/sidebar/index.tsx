'use client';
import { DASHBOARD, STATISTIC } from '@/utils/constant/routes';
import classNames from 'classnames';
import {
  CalendarDays,
  ChartArea,
  Hospital,
  LayoutDashboard,
  MessageCircleMore,
} from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathName = usePathname();
  const router = useRouter();

  const handleChangePage = (path: string) => {
    router.push(path);
  };

  return (
    <div className='flex flex-col justify-start items-center bg-white h-full w-full'>
      <div className='h-20 w-20 p-4'>
        <Image
          src='https://images.pexels.com/photos/27689581/pexels-photo-27689581/free-photo-of-a-table-setting-with-a-place-card-and-silverware.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='Logo'
          width={64}
          height={64}
          className='w-full h-full rounded-xl'
        />
      </div>
      <div className='mt-10 flex flex-col items-center justify-center gap-8 w-full'>
        <div
          className={classNames(
            'w-full flex items-center justify-center border-l-4  py-2',
            pathName === DASHBOARD ? 'border-l-primary' : 'border-none'
          )}
          onClick={() => handleChangePage(DASHBOARD)}
        >
          <div className=''>
            <LayoutDashboard
              size={pathName === DASHBOARD ? 26 : 24}
              stroke={pathName === DASHBOARD ? 'rgb(160 141 235)' : 'black'}
            />
          </div>
        </div>
        <div className=''>
          <CalendarDays size={24} stroke='black' />
        </div>
        <div className=''>
          <Hospital size={24} stroke='black' />
        </div>
        <div
          className={classNames(
            'w-full flex items-center justify-center border-l-4  py-2',
            pathName === STATISTIC ? 'border-l-primary' : 'border-none'
          )}
          onClick={() => handleChangePage(STATISTIC)}
        >
          <ChartArea
            size={pathName === STATISTIC ? 26 : 24}
            stroke={pathName === STATISTIC ? 'rgb(160 141 235)' : 'black'}
          />
        </div>
        <div className=''>
          <MessageCircleMore size={24} stroke='black' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
