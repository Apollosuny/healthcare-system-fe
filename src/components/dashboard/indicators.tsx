import { Droplet, Heart, Stethoscope } from 'lucide-react';

const Indicators: React.FC = () => {
  return (
    <div className=''>
      <h2 className='text-2xl font-semibold text-black'>Indicators</h2>
      <div className='flex items-center justify-between mt-3 gap-5'>
        <div className='w-full rounded-xl bg-white px-4 py-5 flex items-center gap-3'>
          <div className='p-4 rounded-xl bg-[#fad1d9]'>
            <Heart size={20} stroke='#fc1f51' fill='#fc1f51' />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <span className='text-base font-semibold text-black'>6025</span>
            <span className='text-sm font-normal text-[#9797aa]'>
              Total Patients
            </span>
          </div>
        </div>
        <div className='w-full rounded-xl bg-white px-4 py-5 flex items-center gap-3'>
          <div className='p-4 rounded-xl bg-[#e9d1ff]'>
            <Droplet size={20} stroke='#971ffc' fill='#971ffc' />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <span className='text-base font-semibold text-black'>200</span>
            <span className='text-sm font-normal text-[#9797aa]'>
              New This Week
            </span>
          </div>
        </div>
        <div className='w-full rounded-xl bg-white px-4 py-5 flex items-center gap-3'>
          <div className='p-4 rounded-xl bg-[#ffe5d5]'>
            <Stethoscope size={20} stroke='#fe7c23' />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <span className='text-base font-semibold text-black'>67</span>
            <span className='text-sm font-normal text-[#9797aa]'>
              Critical Alerts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indicators;
