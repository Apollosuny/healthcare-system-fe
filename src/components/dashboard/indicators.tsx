import {
  CalendarClock,
  ChevronRight,
  TriangleAlert,
  UserPlus,
  Users,
} from 'lucide-react';

const Indicators: React.FC = () => {
  return (
    <div className=''>
      <h2 className='text-2xl font-semibold text-black'>Overview</h2>
      <div className='flex flex-wrap items-center justify-between mt-3 gap-5'>
        <div className='bg-white border rounded-xl w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]'>
          <div className='flex items-center justify-between p-4 border-b'>
            <div className='flex items-center gap-3'>
              <div className='border rounded-xl p-2'>
                <CalendarClock size={24} stroke='#121212' />
              </div>
              <p className='font-semibold'>Appointments</p>
            </div>
            <ChevronRight size={24} stroke='#121212' />
          </div>
          <div className='flex items-end justify-between p-4'>
            <div className=''>
              <p className='text-2xl font-semibold'>46</p>
              <p className='text-sm font-normal'>Appointments</p>
            </div>
            <div className='flex items-end gap-1'>
              <div className='w-2 h-4 bg-slate-400 rounded-t-sm' />
              <div className='w-2 h-6 bg-slate-400 rounded-t-sm' />
              <div className='w-2 h-8 bg-slate-700 rounded-t-sm' />
              <div className='w-2 h-5 bg-slate-400 rounded-t-sm' />
              <div className='w-2 h-7 bg-slate-400 rounded-t-sm' />
            </div>
          </div>
        </div>
        <div className='bg-white border rounded-xl w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]'>
          <div className='flex items-center justify-between p-4 border-b'>
            <div className='flex items-center gap-3'>
              <div className='border rounded-xl p-2'>
                <Users size={24} stroke='#121212' />
              </div>
              <p className='font-semibold'>Daily Active Patients</p>
            </div>
            <ChevronRight size={24} stroke='#121212' />
          </div>
          <div className='flex items-end justify-between p-4'>
            <div className=''>
              <p className='text-2xl font-semibold'>200</p>
              <p className='text-sm font-normal'>Patients</p>
            </div>
            <div className='flex items-end gap-1'>
              <div className='w-2 h-4 bg-green-400 rounded-t-sm' />
              <div className='w-2 h-6 bg-green-400 rounded-t-sm' />
              <div className='w-2 h-8 bg-green-700 rounded-t-sm' />
              <div className='w-2 h-5 bg-green-400 rounded-t-sm' />
              <div className='w-2 h-7 bg-green-400 rounded-t-sm' />
            </div>
          </div>
        </div>
        <div className='bg-white border rounded-xl w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]'>
          <div className='flex items-center justify-between p-4 border-b'>
            <div className='flex items-center gap-3'>
              <div className='border rounded-xl p-2'>
                <UserPlus size={24} stroke='#121212' />
              </div>
              <p className='font-semibold'>New Patients</p>
            </div>
            <ChevronRight size={24} stroke='#121212' />
          </div>
          <div className='flex items-end justify-between p-4'>
            <div className=''>
              <p className='text-2xl font-semibold'>129</p>
              <p className='text-sm font-normal'>Patients</p>
            </div>
            <div className='flex items-end gap-1'>
              <div className='w-2 h-4 bg-cyan-400 rounded-t-sm' />
              <div className='w-2 h-6 bg-cyan-400 rounded-t-sm' />
              <div className='w-2 h-8 bg-cyan-700 rounded-t-sm' />
              <div className='w-2 h-5 bg-cyan-400 rounded-t-sm' />
              <div className='w-2 h-7 bg-cyan-400 rounded-t-sm' />
            </div>
          </div>
        </div>
        <div className='bg-white border rounded-xl w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]'>
          <div className='flex items-center justify-between p-4 border-b'>
            <div className='flex items-center gap-3'>
              <div className='border rounded-xl p-2'>
                <TriangleAlert size={24} stroke='#121212' />
              </div>
              <p className='font-semibold'>Critical Alert</p>
            </div>
            <ChevronRight size={24} stroke='#121212' />
          </div>
          <div className='flex items-end justify-between p-4'>
            <div className=''>
              <p className='text-2xl font-semibold'>65</p>
              <p className='text-sm font-normal'>Patients</p>
            </div>
            <div className='flex items-end gap-1'>
              <div className='w-2 h-4 bg-red-400 rounded-t-sm' />
              <div className='w-2 h-6 bg-red-400 rounded-t-sm' />
              <div className='w-2 h-8 bg-red-700 rounded-t-sm' />
              <div className='w-2 h-5 bg-red-400 rounded-t-sm' />
              <div className='w-2 h-7 bg-red-400 rounded-t-sm' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indicators;
