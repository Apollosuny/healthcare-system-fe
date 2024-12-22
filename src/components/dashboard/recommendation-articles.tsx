'use client';
import { useQuery } from '@tanstack/react-query';
import ArticleCard from './article-card';
import { getHealthInformation } from '@/api/health-information';
import Skeleton from 'react-loading-skeleton';

const RecommendationArticles: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['recommendation-articles'],
    queryFn: getHealthInformation,
  });

  return (
    <div className='mt-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold text-black'>
          Recommendation ariticles
        </h2>
        <p className='text-[#8875e2] text-sm'>See all</p>
      </div>
      <div className='flex items-center gap-x-3 mt-4'>
        {isLoading ? (
          <>
            <Skeleton height={100} width={260} />
            <Skeleton height={100} width={260} />
            <Skeleton height={100} width={260} />
          </>
        ) : (
          (data?.slice(0, 2) || []).map((article) => (
            <ArticleCard key={article.id} data={article} />
          ))
        )}
      </div>
    </div>
  );
};

export default RecommendationArticles;
