import Chart from 'react-apexcharts';

const Activity: React.FC = () => {
  const chart = {
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div className=''>
      <h2 className='text-2xl font-semibold text-black'>Activity</h2>
      <div className='mt-3 bg-white rounded-xl p-4 flex items-center justify-center'>
        <Chart
          options={chart.options}
          series={chart.series}
          type='line'
          width='500'
        />
      </div>
    </div>
  );
};

export default Activity;
