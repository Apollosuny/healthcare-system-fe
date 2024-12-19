const BMIStatistic: React.FC = () => {
  return (
    <div className=''>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
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
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <th className='px-6 py-4'>12345</th>
              <td className='px-6 py-4'>Trung</td>
              <td className='px-6 py-4'>Tran</td>
              <td className='px-6 py-4'>24.9</td>
              <td className='px-6 py-4'>Underweight</td>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <th className='px-6 py-4'>12345</th>
              <td className='px-6 py-4'>Trung</td>
              <td className='px-6 py-4'>Tran</td>
              <td className='px-6 py-4'>24.9</td>
              <td className='px-6 py-4'>Underweight</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BMIStatistic;
