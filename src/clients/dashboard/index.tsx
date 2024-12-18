'use client';

import Activity from '@/components/dashboard/activity';
import Indicators from '@/components/dashboard/indicators';
import RecommendationArticles from '@/components/dashboard/recommendation-articles';
import ScheduledCard from '@/components/dashboard/ScheduledCard';
import Treatment from '@/components/dashboard/treatment';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState<Date>();
  return (
    <div className='mt-4'>
      <div className='grid grid-cols-3 gap-20'>
        <div className='col-span-2'>
          <Indicators />
          <div className='grid grid-cols-3 mt-4 gap-4'>
            <div className='col-span-2'>
              <Activity />
            </div>
            <div className=''>
              <Treatment />
            </div>
          </div>
          <RecommendationArticles />
        </div>
        <div className='bg-white px-6 py-5 rounded-xl'>
          <DayPicker
            mode='single'
            selected={selected}
            onSelect={setSelected}
            className='!text-black max-w-xs sm:max-w-md lg:max-w-lg mx-auto'
            classNames={{
              root: 'flex flex-col items-center',
              table: 'table-fixed',
              day: 'rounded-full w-8 h-8 lg:w-12 lg:h-12',
            }}
          />
          <div className=''>
            <div className='flex items-center justify-between'>
              <p className='text-black font-medium text-base'>Doctor</p>
              <p className='text-[#8875e2] text-sm'>See all</p>
            </div>
            <div className='flex items-center justify-center gap-3 rounded-xl bg-[#f6f6fe] p-2 mt-2'>
              <div className='!w-9 !h-9 rounded-full bg-slate-500'></div>
              <div className='!w-9 !h-9 rounded-full bg-slate-500'></div>
              <div className='!w-9 !h-9 rounded-full bg-slate-500'></div>
              <div className='!w-9 !h-9 rounded-full bg-slate-500'></div>
              <div className='!w-9 !h-9 rounded-full bg-slate-500'></div>
            </div>
            <div className='mt-4 flex flex-col items-center justify-center gap-2'>
              <ScheduledCard />
              <ScheduledCard />
              <ScheduledCard />
              <ScheduledCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
