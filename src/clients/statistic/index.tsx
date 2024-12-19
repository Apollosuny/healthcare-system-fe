'use client';

import BMIStatistic from '@/components/statistic/bmi-statistic';
import Users from '@/components/statistic/users';
import classNames from 'classnames';
import { useState } from 'react';

const TABS = {
  USERS: 0,
  BMI: 1,
};

const Statistic: React.FC = () => {
  const [tab, setTab] = useState<number>(TABS.USERS);

  const renderContent = () => {
    switch (tab) {
      case TABS.USERS:
        return <Users />;
      case TABS.BMI:
        return <BMIStatistic />;
    }
  };

  return (
    <div className='w-full mt-4'>
      <ul className='text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400'>
        <li
          className='w-full focus-within:z-10'
          onClick={() => setTab(TABS.USERS)}
        >
          <div
            className={classNames(
              'inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 rounded-s-lg hover:bg-gray-50',
              tab === TABS.USERS && 'active !bg-[#e9d1ff]'
            )}
          >
            Users
          </div>
        </li>
        <li
          className='w-full focus-within:z-10'
          onClick={() => setTab(TABS.BMI)}
        >
          <div
            className={classNames(
              'inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 hover:bg-gray-50',
              tab === TABS.BMI && 'active !bg-[#e9d1ff]'
            )}
          >
            BMI
          </div>
        </li>
        <li className='w-full focus-within:z-10'>
          <div className='inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 rounded-s-lg hover:bg-gray-50'>
            Settings
          </div>
        </li>
        <li className='w-full focus-within:z-10'>
          <div className='inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 rounded-e-lg hover:bg-gray-50'>
            Invoice
          </div>
        </li>
      </ul>
      <div className='mt-4'>{renderContent()}</div>
    </div>
  );
};

export default Statistic;
