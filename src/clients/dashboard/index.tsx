'use client';

import Activity from '@/components/dashboard/activity';
import Indicators from '@/components/dashboard/indicators';
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
          <div className='grid grid-cols-3 mt-4'>
            <div className='col-span-2'>
              <Activity />
            </div>
            <div className=''>
              <Treatment />
            </div>
          </div>
        </div>
        <div className='bg-white px-6 py-5 rounded-xl'>
          <DayPicker
            mode='single'
            selected={selected}
            onSelect={setSelected}
            className='!text-black'
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
