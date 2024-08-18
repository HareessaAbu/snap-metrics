import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ClusteredBarChart = () => {
  const options = {
    chart: {
      type: 'column',
      borderRadius: 12,
    },
    title: {
      text: 'Content Availability Comparison'
    },
    xAxis: {
      categories: ['Stock Photos', 'Vectors', 'Illustrations', 'Editorial Images', 'Videos', 'Music', 'Templates', 'Archives'],
      title: {
        text: 'Content Types'
      }
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Presence (Yes/No)'
      },
      allowDecimals: false
    },
    series: [{
      name: '123RF',
      data: [1, 1, 1, 1, 1, 0, 0, 0] // 1 for available, 0 for not available
    }, {
      name: 'Shutterstock',
      data: [1, 1, 1, 1, 1, 1, 0, 0]
    }, {
      name: 'Adobe Stock',
      data: [1, 1, 1, 1, 1, 0, 1, 0]
    }, {
      name: 'Getty Images',
      data: [1, 0, 0, 1, 1, 1, 0, 1]
    }, {
      name: 'iStock',
      data: [1, 1, 1, 1, 1, 0, 0, 0]
    }]
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default ClusteredBarChart;
