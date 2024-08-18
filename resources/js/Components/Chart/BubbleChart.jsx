import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

const BubbleChart = ({className='', title = null, backgroundColor = 'transparent'}) => {
  const options = {
    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      zoomType: 'xy',
      borderRadius: 12,
      backgroundColor: backgroundColor,
    },
    title: {
      text: title,
      // text: 'Comparison of 123RF with Competitors'
    },
    xAxis: {
      title: {
        text: 'Marketplace Size'
      }
    },
    yAxis: {
      title: {
        text: 'Level of Service'
      }
    },
    series: [{
        name: '123RF',
        data: [[50, 7.5, 20]]
    }, {
        name: 'Shutterstock',
        data: [[90, 8.5, 40]]
    }, {
        name: 'Adobe Stock',
        data: [[80, 9.0, 35]]
    }, {
        name: 'Getty Images',
        data: [[85, 8.0, 50]]
    }, {
        name: 'iStock',
        data: [[70, 7.0, 25]]
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

export default BubbleChart;
