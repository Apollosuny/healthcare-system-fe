/* eslint-disable */
import { getAverageBloodSugar } from '@/api/client';
import { useQuery } from '@tanstack/react-query';

const AverageBloodSugar: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['average-blood-sugar'],
    queryFn: getAverageBloodSugar,
  });

  console.log(data);

  return (
    <div className='w-full'>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                id
              </th>
              <th scope='col' className='px-6 py-3'>
                Full Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Average Systolic
              </th>
              <th scope='col' className='px-6 py-3'>
                Average Diastolic
              </th>
              <th scope='col' className='px-6 py-3'>
                Average Pulse
              </th>
            </tr>
          </thead>
          <tbody>
            {(data ?? []).map((item: any) => (
              <tr key={item.client_id} className='bg-white border-b'>
                <th className='px-6 py-4'>{item.client_id}</th>
                <td className='px-6 py-4'>{item.full_name}</td>
                <td className='px-6 py-4'>{item.avg_systolic || '-'} mmHg</td>
                <td className='px-6 py-4'>{item.avg_diastolic || '-'} mmHg</td>
                <td className='px-6 py-4'>{item.avg_pulse || '-'} mmHg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AverageBloodSugar;
