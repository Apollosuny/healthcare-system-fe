/* eslint-disable */
'use client';
import { getClientData } from '@/api/client';
import { useQuery } from '@tanstack/react-query';
import { DateTime } from 'luxon';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';

const Users: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const debounceText = useDebounce(searchText, 500);

  const handleChangeSearchText = (e: string) => {
    setSearchText(e);
  };

  const { data } = useQuery({
    queryKey: ['client', debounceText],
    queryFn: () => getClientData(searchText),
  });

  return (
    <div className='w-full'>
      <div className='my-4'>
        <div>
          <input
            type='text'
            id=''
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            placeholder='Search name here...'
            required
            value={searchText}
            onChange={(e) => handleChangeSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                id
              </th>
              <th scope='col' className='px-6 py-3'>
                First Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Last Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Date of Birth
              </th>
              <th scope='col' className='px-6 py-3'>
                Gender
              </th>
              <th scope='col' className='px-6 py-3'>
                Address
              </th>
              <th scope='col' className='px-6 py-3'>
                Height
              </th>
              <th scope='col' className='px-6 py-3'>
                Weight
              </th>
            </tr>
          </thead>
          <tbody>
            {(data ?? []).map((item: any) => (
              <tr key={item.id} className='bg-white border-b'>
                <th className='px-6 py-4'>{item.id}</th>
                <td className='px-6 py-4'>{item.firstName}</td>
                <td className='px-6 py-4'>{item.lastName}</td>
                <td className='px-6 py-4'>
                  {DateTime.fromISO(item.dob).toFormat('yyyy-MM-dd')}
                </td>
                <td className='px-6 py-4'>{item.gender}</td>
                <td className='px-6 py-4'>{item.address}</td>
                <td className='px-6 py-4'>{item.height}</td>
                <td className='px-6 py-4'>{item.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
