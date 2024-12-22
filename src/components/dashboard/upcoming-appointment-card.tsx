import { ChevronRight, Dot } from 'lucide-react';
import { DateTime } from 'luxon';
import Image from 'next/image';

const UpcomingAppoitmentCard: React.FC = () => {
  return (
    <div className='relative flex items-center justify-between w-full bg-[#f6f6fe] rounded-xl px-4 py-2 hover:scale-95 transition-all duration-300'>
      <div className='flex items-center gap-3'>
        <Image
          src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Avatar'
          width={48}
          height={48}
          className='rounded-full !w-12 !h-12 object-cover'
        />
        <div className=''>
          <h5 className='text-base font-semibold'>John Smith</h5>
          <div className='flex items-center gap-3'>
            <p className='text-sm'>15:30 - 16:15</p>
            <Dot size={24} stroke='#121212' />
            <p className='text-sm'>{DateTime.now().toFormat('dd LLL yyyy')}</p>
          </div>
        </div>
      </div>
      <ChevronRight size={24} stroke='#121212' />
    </div>
  );
};

export default UpcomingAppoitmentCard;
