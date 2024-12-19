const Users: React.FC = () => {
  return (
    <div className='w-full'>
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
                Average Systolic
              </th>
              <th scope='col' className='px-6 py-3'>
                Average Diastolic
              </th>
              <th scope='col' className='px-6 py-3'>
                Total Steps
              </th>
              <th scope='col' className='px-6 py-3'>
                Total Health Articles Read
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <th className='px-6 py-4'>12345</th>
              <td className='px-6 py-4'>Trung</td>
              <td className='px-6 py-4'>Tran</td>
              <td className='px-6 py-4'>24.9</td>
              <td className='px-6 py-4'>30.9</td>
              <td className='px-6 py-4'>13204</td>
              <td className='px-6 py-4'>100</td>
            </tr>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
              <th className='px-6 py-4'>12345</th>
              <td className='px-6 py-4'>Trung</td>
              <td className='px-6 py-4'>Tran</td>
              <td className='px-6 py-4'>24.9</td>
              <td className='px-6 py-4'>30.9</td>
              <td className='px-6 py-4'>13204</td>
              <td className='px-6 py-4'>100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
