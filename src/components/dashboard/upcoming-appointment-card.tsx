import { ChevronRight, Dot } from 'lucide-react';
import { DateTime } from 'luxon';
import Image from 'next/image';

type Props = {
  data: {
    id: number;
    name: string;
    avatar: string;
    startTime: string;
    date: string;
  };
};

const UpcomingAppoitmentCard: React.FC<Props> = ({ data }) => {
  return (
    <div className='relative flex items-center justify-between w-full bg-[#f6f6fe] rounded-xl px-4 py-2 hover:scale-95 transition-all duration-300'>
      <div className='flex items-center gap-3'>
        <Image
          src={data.avatar}
          alt={data.name}
          width={48}
          height={48}
          className='rounded-full !w-12 !h-12 object-cover'
        />
        <div className=''>
          <h5 className='text-base font-semibold'>{data.name}</h5>
          <div className='flex items-center gap-3'>
            <p className='text-sm'>
              Start from: {DateTime.fromISO(data.startTime).toFormat('HH:mm a')}
            </p>
            <Dot size={24} stroke='#121212' />
            <p className='text-sm'>
              {DateTime.fromISO(data.date).toFormat('dd LLL yyyy')}
            </p>
          </div>
        </div>
      </div>
      <ChevronRight size={24} stroke='#121212' />
    </div>
  );
};

export default UpcomingAppoitmentCard;
