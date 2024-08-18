import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const RadarChart = ({title = null, className = '', backgroundColor = 'transparent'}) => {
  const options = {
    chart: {
      type: 'line',
      polar: true,
      borderRadius: 12,
      backgroundColor: backgroundColor,
    },
    title: {
      // text: 'Content Availability Radar Chart'
      text: title,
    },
    pane: {
      size: '80%'
    },
    xAxis: {
      categories: ['Stock Photos', 'Vectors', 'Illustrations', 'Editorial Images', 'Videos', 'Music', 'Templates', 'Archives'],
      tickmarkPlacement: 'on',
      lineWidth: 0,
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
      max: 1,
      title: {
        text: 'Availability'
      }
    },
    series: [{
      name: '123RF',
      data: [1, 1, 1, 1, 1, 0, 0, 0],
      pointPlacement: 'on'
    }, {
      name: 'Shutterstock',
      data: [1, 1, 1, 1, 1, 1, 0, 0],
      pointPlacement: 'on'
    }, {
      name: 'Adobe Stock',
      data: [1, 1, 1, 1, 1, 0, 1, 0],
      pointPlacement: 'on'
    }, {
      name: 'Getty Images',
      data: [1, 0, 0, 1, 1, 1, 0, 1],
      pointPlacement: 'on'
    }, {
      name: 'iStock',
      data: [1, 1, 1, 1, 1, 0, 0, 0],
      pointPlacement: 'on'
    }]
  };

  return (
    <div className={`container ${className}`}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default RadarChart;
