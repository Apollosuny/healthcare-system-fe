import { Dot } from 'lucide-react';
import Image from 'next/image';

const ArticleCard: React.FC = () => {
  return (
    <div className='bg-white rounded-xl p-4 flex items-center gap-5'>
      <div className=''>
        <Image
          src='https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='Article'
          width={80}
          height={80}
          className='rounded-xl !w-20 !h-20'
        />
      </div>
      <div className='flex flex-col justify-center items-start gap-y-1'>
        <div className='flex items-center gap-2'>
          <div className='!w-2 !h-2 rounded-full bg-[#fe7c23]' />
          <p className='text-xs font-medium text-[#c4c4cf]'>Mental Health</p>
        </div>
        <h4 className='text-[#121212] font-semibold line-clamp-2'>
          Understanding Human Behavior
        </h4>
        <div className='flex items-center gap-1'>
          <Image
            src='https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Author'
            width={20}
            height={20}
            className='rounded-full !w-5 !h-5 object-cover'
          />
          <p className='text-sm text-[#c4c4cf]'>John Doe</p>
          <Dot size={24} stroke='#84849c' />
          <p className='text-[#c4c4cf] font-medium'>02.12.2024</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
