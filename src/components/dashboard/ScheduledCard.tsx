import { ChevronRight } from 'lucide-react';

const ScheduledCard: React.FC = () => {
  return (
    <div className='bg-[#f6f6fe] rounded-xl p-4 flex items-center justify-between w-full'>
      <div className='flex items-center gap-2'>
        <div className='bg-[#8971e6] !w-8 !h-8 rounded-xl'></div>
        <div className=''>
          <h5 className='text-black font-semibold'>Dentist</h5>
          <p className='text-black text-xs'>15:00 - 15:45</p>
          <p className='text-black text-xs'>Dr.Tran Bao Trung</p>
        </div>
      </div>
      <div>
        <ChevronRight size={24} stroke='#b8b8bf' />
      </div>
    </div>
  );
};

export default ScheduledCard;
