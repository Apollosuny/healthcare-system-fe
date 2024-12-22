import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Activity: React.FC = () => {
  const chart = {
    options: {
      chart: {
        id: 'patients-activity',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        title: {
          text: 'Months',
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#333',
          },
        },
      },
      yaxis: {
        title: {
          text: 'Number of Patients',
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#333',
          },
        },
      },
      colors: ['#00aaff'],
      stroke: {
        // curve: 'smooth',
        width: 2,
      },
      grid: {
        borderColor: '#e7e7e7',
      },
    },
    series: [
      {
        name: 'Number of Patients',
        data: [120, 150, 130, 170, 190, 210, 230, 220, 240, 250, 270, 300], // Mock data
      },
    ],
  };

  return (
    <div className=''>
      <h2 className='text-2xl font-semibold text-black'>Patient Activity</h2>
      <div className='mt-3 bg-white rounded-xl p-4 flex items-center justify-center'>
        <Chart
          options={chart.options}
          series={chart.series}
          type='line'
          width='500px'
          height='300px'
        />
      </div>
    </div>
  );
};

export default Activity;
