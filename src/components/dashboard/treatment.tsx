import { ChevronRight, Pill } from 'lucide-react';

const Treatment: React.FC = () => {
  return (
    <div className=''>
      <div className='flex items-center justify-between mb-3'>
        <h2 className='text-2xl font-semibold text-black'>Indicators</h2>
        <span className='text-[#937ee8] text-base font-medium'>See all</span>
      </div>
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className='p-4 bg-white rounded-lg flex items-center justify-between w-full'>
          <div className='flex items-center gap-3'>
            <div className='p-2 rounded-xl bg-[#d3e3ff]'>
              <Pill size={20} stroke='#236bfe' />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <span className='text-base font-semibold text-black'>
                Antibiotics
              </span>
              <span className='text-sm font-normal text-[#9797aa]'>
                1 tablet twice day
              </span>
            </div>
          </div>
          <ChevronRight size={24} stroke='black' />
        </div>
        <div className='p-4 bg-white rounded-lg flex items-center justify-between w-full'>
          <div className='flex items-center gap-3'>
            <div className='p-2 rounded-xl bg-[#fde0e4]'>
              <Pill size={20} stroke='#fd1e51' />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <span className='text-base font-semibold text-black'>
                Vitamin C
              </span>
              <span className='text-sm font-normal text-[#9797aa]'>
                1 tablet after meal
              </span>
            </div>
          </div>
          <ChevronRight size={24} stroke='black' />
        </div>
        <div className='p-4 bg-white rounded-lg flex items-center justify-between w-full'>
          <div className='flex items-center gap-3'>
            <div className='p-2 rounded-xl bg-[#daf1e3]'>
              <Pill size={20} stroke='#1fc06a' />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <span className='text-base font-semibold text-black'>
                Vitamin D
              </span>
              <span className='text-sm font-normal text-[#9797aa]'>
                1 tablet after meal
              </span>
            </div>
          </div>
          <ChevronRight size={24} stroke='black' />
        </div>
        <div className='p-4 bg-white rounded-lg flex items-center justify-between w-full'>
          <div className='flex items-center gap-3'>
            <div className='p-2 rounded-xl bg-[#ffe5d5]'>
              <Pill size={20} stroke='#ff7c25' />
            </div>
            <div className='flex flex-col justify-center items-start'>
              <span className='text-base font-semibold text-black'>
                Omega-3
              </span>
              <span className='text-sm font-normal text-[#9797aa]'>
                1 tablet after meal
              </span>
            </div>
          </div>
          <ChevronRight size={24} stroke='black' />
        </div>
      </div>
    </div>
  );
};

export default Treatment;
