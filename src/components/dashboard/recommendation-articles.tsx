import ArticleCard from './article-card';

const RecommendationArticles: React.FC = () => {
  return (
    <div className='mt-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold text-black'>Indicators</h2>
        <p className='text-[#8875e2] text-sm'>See all</p>
      </div>
      <div className='flex items-center gap-x-3 mt-4'>
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default RecommendationArticles;
