/* eslint-disable */
'use client';

import { getAppointments } from '@/api/appointment';
import Activity from '@/components/dashboard/activity';
import Indicators from '@/components/dashboard/indicators';
import RecommendationArticles from '@/components/dashboard/recommendation-articles';
import Treatment from '@/components/dashboard/treatment';
import UpcomingAppoitmentCard from '@/components/dashboard/upcoming-appointment-card';
import { useQuery } from '@tanstack/react-query';
import { DateTime } from 'luxon';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Skeleton from 'react-loading-skeleton';

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState<Date>(DateTime.now().toJSDate());

  const { data, isLoading } = useQuery({
    queryKey: ['appointments'],
    queryFn: getAppointments,
  });

  return (
    <div className='mt-4 h-screen'>
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
            required
            classNames={{
              root: 'flex flex-col items-center',
              table: 'table-fixed',
              day: 'rounded-full w-8 h-8 lg:w-12 lg:h-12',
            }}
          />
          <div className=''>
            <div className='text-2xl font-semibold text-black'>
              Upcoming Appointment
            </div>
            <div className='mt-4 flex flex-col items-center justify-center gap-2'>
              {isLoading ? (
                <div className='w-full'>
                  <Skeleton height={48} className='w-full' />
                  <Skeleton height={48} className='w-full mt-2' />
                  <Skeleton height={48} className='w-full mt-2' />
                </div>
              ) : (
                (data || []).map((item: any) => (
                  <UpcomingAppoitmentCard key={item.id} data={item} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
