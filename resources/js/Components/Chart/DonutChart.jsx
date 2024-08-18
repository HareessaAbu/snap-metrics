import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DonutChart = ({title = null, backgroundColor = 'transparent', className=''}) => {
  const options = {
    chart: {
      type: 'pie',
      backgroundColor: backgroundColor,
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      borderRadius: 12,
    },
    title: {
      text: title
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        dataLabels: {
          enabled: true,
          formatter: function () {
            return this.point.name + ': ' + (this.point.y ? '✔️' : '❌'); // Custom labels
          }
        }
      }
    },
    series: [{
      name: 'Availability in 123RF',
      data: [
        { name: 'Stock Photos', y: 1 }, // 1 for Yes
        { name: 'Vectors', y: 1 },
        { name: 'Illustrations', y: 1 },
        { name: 'Editorial Images', y: 1 },
        { name: 'Videos', y: 1 },
        { name: 'Music', y: 0 },       // 0 for No
        { name: 'Templates', y: 0 },
        { name: 'Archives', y: 0 }
      ]
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

export default DonutChart;
