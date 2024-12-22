import { Dot } from 'lucide-react';
import { DateTime } from 'luxon';
import Image from 'next/image';

type Props = {
  data: {
    id: number;
    title: string;
    type: string;
    date: string;
    banner: string;
    author: {
      id: number;
      name: string;
      specialty: string;
      avatar: string;
    };
  };
};

const ArticleCard: React.FC<Props> = ({ data }) => {
  return (
    <div className='bg-white rounded-xl p-4 flex items-center gap-5'>
      <div className=''>
        <Image
          src={data.banner}
          alt='Article'
          width={80}
          height={80}
          className='rounded-xl !w-20 !h-20'
        />
      </div>
      <div className='flex flex-col justify-center items-start gap-y-1'>
        <div className='flex items-center gap-2'>
          <div className='!w-2 !h-2 rounded-full bg-[#fe7c23]' />
          <p className='text-xs font-medium text-[#c4c4cf]'>{data.type}</p>
        </div>
        <h4 className='text-[#121212] font-semibold line-clamp-2'>
          {data.title}
        </h4>
        <div className='flex items-center gap-1'>
          <Image
            src={data.author.avatar}
            alt='Author'
            width={20}
            height={20}
            className='rounded-full !w-5 !h-5 object-cover'
          />
          <p className='text-sm text-[#c4c4cf]'>{data.author.name}</p>
          <Dot size={24} stroke='#84849c' />
          <p className='text-[#c4c4cf] font-medium'>
            {DateTime.fromISO(data.date).toFormat('yyyy-MM-dd')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
