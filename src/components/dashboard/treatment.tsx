import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Treatment: React.FC = () => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    series: number[];
  }>({
    labels: [],
    series: [],
  });

  const [loading, setLoading] = useState(true);
  const mockData = {
    'Blood Pressure': 150,
    'Blood Sugar': 120,
    Steps: 180,
    Meal: 90,
  };

  useEffect(() => {
    setTimeout(() => {
      const labels = Object.keys(mockData);
      const series = Object.values(mockData);
      setChartData({ labels: labels, series });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className=''>
      <h2 className='text-2xl font-semibold text-black'>Record Rate</h2>
      <div className='mt-3 bg-white rounded-xl p-4 flex items-center justify-center w-full min-h-[300px] max-w-[400px] md:max-w-[600px] mx-auto'>
        {loading ? (
          <Skeleton width={200} height={200} className='!rounded-full' />
        ) : (
          <Chart
            options={{
              chart: {
                type: 'pie',
              },
              labels: chartData.labels,
              title: {
                align: 'center',
              },
              legend: {
                position: 'bottom',
                fontSize: '14px',
              },
            }}
            series={chartData.series}
            type='pie'
          />
        )}
      </div>
    </div>
  );
};

export default Treatment;
