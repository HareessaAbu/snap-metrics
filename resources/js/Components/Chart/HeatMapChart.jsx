import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsHeatmap from 'highcharts/modules/heatmap';

HighchartsHeatmap(Highcharts); // Import the heatmap module

const HeatMapChart = ({title = null, className = '', backgroundColor = 'transparent'}) => {
  const options = {
    chart: {
      type: 'heatmap',
      plotBorderWidth: 1,
      borderRadius: 12,
      backgroundColor: backgroundColor,
    },
    title: {
      text: title,
      // text: 'Content Performance Heat Map'
    },
    xAxis: {
      categories: ['123RF', 'Shutterstock', 'Adobe Stock', 'Getty Images', 'iStock']
    },
    yAxis: {
      categories: ['Stock Photos', 'Vectors', 'Illustrations', 'Editorial Images', 'Videos', 'Music', 'Templates', 'Archives'],
      title: null
    },
    colorAxis: {
      min: 0,
      max: 100,
      stops: [
        [0, '#e7e9f0'],
        [0.5, '#84a9d6'],
        [1, '#011866'],
      ],
      labels: {
        format: '{value}'
      }
    },
    series: [{
      name: 'Performance Score',
      data: [
        [0, 0, 80], // 123RF - Stock Photos
        [0, 1, 70], // 123RF - Vectors
        [0, 2, 60], // 123RF - Illustrations
        [0, 3, 75], // 123RF - Editorial Images
        [0, 4, 85], // 123RF - Videos
        [0, 5, 50], // 123RF - Music
        [0, 6, 40], // 123RF - Templates
        [0, 7, 30], // 123RF - Archives
        [1, 0, 90], // Shutterstock - Stock Photos
        [1, 1, 80], // Shutterstock - Vectors
        [1, 2, 70], // Shutterstock - Illustrations
        [1, 3, 85], // Shutterstock - Editorial Images
        [1, 4, 95], // Shutterstock - Videos
        [1, 5, 60], // Shutterstock - Music
        [1, 6, 55], // Shutterstock - Templates
        [1, 7, 45], // Shutterstock - Archives
        [2, 0, 70], // Adobe Stock - Stock Photos
        [2, 1, 65], // Adobe Stock - Vectors
        [2, 2, 75], // Adobe Stock - Illustrations
        [2, 3, 80], // Adobe Stock - Editorial Images
        [2, 4, 70], // Adobe Stock - Videos
        [2, 5, 45], // Adobe Stock - Music
        [2, 6, 65], // Adobe Stock - Templates
        [2, 7, 50], // Adobe Stock - Archives
        [3, 0, 85], // Getty Images - Stock Photos
        [3, 1, 60], // Getty Images - Vectors
        [3, 2, 55], // Getty Images - Illustrations
        [3, 3, 70], // Getty Images - Editorial Images
        [3, 4, 80], // Getty Images - Videos
        [3, 5, 55], // Getty Images - Music
        [3, 6, 50], // Getty Images - Templates
        [3, 7, 60], // Getty Images - Archives
        [4, 0, 75], // iStock - Stock Photos
        [4, 1, 70], // iStock - Vectors
        [4, 2, 65], // iStock - Illustrations
        [4, 3, 75], // iStock - Editorial Images
        [4, 4, 70], // iStock - Videos
        [4, 5, 40], // iStock - Music
        [4, 6, 45], // iStock - Templates
        [4, 7, 35]  // iStock - Archives
      ],
      dataLabels: {
        enabled: false,
        color: '#000'
      }
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

export default HeatMapChart;
