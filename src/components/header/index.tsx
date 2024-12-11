import { Bell, ChevronDown, Search, Settings } from 'lucide-react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <div className='bg-[#edeefb] p-2 rounded-full flex items-center justify-between'>
      <div className='flex items-center gap-3 px-4 py-2 rounded-full bg-white'>
        <Search size={24} stroke='black' />
        <span className='text-base font-medium text-[#9797aa]'>
          Search for something...
        </span>
      </div>
      <div className='flex items-center gap-6 mr-3'>
        <div className=''>
          <Settings size={24} stroke='black' />
        </div>
        <div className='relative flex items-center justify-center'>
          <Bell size={24} stroke='black' />
          <div className='absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full' />
        </div>
        <div className='flex items-center justify-center gap-5'>
          <Image
            src='https://images.pexels.com/photos/29713880/pexels-photo-29713880/free-photo-of-profile-of-a-beagle-relaxing-in-sunlight-indoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Avatar'
            width={48}
            height={48}
            className='rounded-full w-12 h-12 object-cover'
          />
          <p className='text-base font-medium text-black'>Trung Tran</p>
          <ChevronDown size={24} stroke='black' />
        </div>
      </div>
    </div>
  );
};

export default Header;
