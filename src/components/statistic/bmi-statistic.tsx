/* eslint-disable */
import { getBMIStatistic } from '@/api/client';
import { useQuery } from '@tanstack/react-query';

const BMIStatistic: React.FC = () => {
  const { data } = useQuery({
    queryKey: ['bmi'],
    queryFn: getBMIStatistic,
  });

  return (
    <div className=''>
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
                BMI
              </th>
              <th scope='col' className='px-6 py-3'>
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            {(data ?? []).map((item: any) => (
              <tr key={item.client_id} className='bg-white border-b'>
                <th className='px-6 py-4'>{item.client_id}</th>
                <td className='px-6 py-4'>{item.full_name.split(' ')[0]}</td>
                <td className='px-6 py-4'>{item.full_name.split(' ')[1]}</td>
                <td className='px-6 py-4'>{item.bmi}</td>
                <td className='px-6 py-4'>{item.bmi_category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BMIStatistic;
