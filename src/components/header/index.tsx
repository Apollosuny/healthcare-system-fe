'use client';
import { useOnClickOutside } from '@/utils/hooks/use-on-click-outside';
import { Bell, ChevronDown, Search, Settings } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(menuRef, () => setIsMenuOpen(false));

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
        <div className='relative' ref={menuRef}>
          <div
            className='flex items-center justify-center gap-5 cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
          {isMenuOpen && (
            <div
              id='dropdownAvatar'
              className='absolute top-14 left-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44'
            >
              <div className='px-4 py-3 text-sm text-gray-900'>
                <div>Default name</div>
                <div className='font-medium truncate'>name@testing.com</div>
              </div>
              <ul
                className='py-2 text-sm text-gray-700'
                aria-labelledby='dropdownUserAvatarButton'
              >
                <li>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Settings
                  </a>
                </li>
              </ul>
              <div className='py-2'>
                <p className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  Sign out
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
