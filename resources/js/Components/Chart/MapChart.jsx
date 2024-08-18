import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMap from 'highcharts/modules/map';

// Initialize Highcharts Map module
HighchartsMap(Highcharts);

const MapChart = ({ title = null, className = '', backgroundColor = 'transparent' }) => {
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await fetch('https://code.highcharts.com/mapdata/custom/world.topo.json');
        const data = await response.json();
        console.log('Map Data:', data); // Debugging
        setMapData(data);
      } catch (error) {
        console.error('Error fetching map data:', error);
      }
    };

    fetchMapData();
  }, []);

  // Compute the average value for each region
  const data = [
    { 'hc-key': 'us', '123rf': 80, 'competitors': 90 },
    { 'hc-key': 'cn', '123rf': 70, 'competitors': 80 },
    { 'hc-key': 'in', '123rf': 65, 'competitors': 75 },
    { 'hc-key': 'br', '123rf': 50, 'competitors': 55 },
    { 'hc-key': 'ru', '123rf': 60, 'competitors': 65 }
  ].map(item => ({
    'hc-key': item['hc-key'],
    value: (item['123rf'] + item['competitors']) / 2, // Average percentage
    '123rf': item['123rf'],
    'competitors': item['competitors']
  }));

  const options = {
    chart: {
      map: mapData,
      backgroundColor: 'transparent', // Makes the chart background transparent
      borderRadius: 8,
    },
    title: {
      // text: 'Regional Coverage Comparison',
      text: title
    },
    // subtitle: {
    //   text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world.topo.json">World, medium resolution</a>',
    // },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom',
      },
    },
    colorAxis: {
      min: 0,
      max: 100, // Ensure this matches the range of your data
      stops: [
        [0, '#e7e9f0'],
        [0.5, '#84a9d6'],
        [1, '#011866'],
      ],
      labels: {
        format: '{value}%',
      },
    },
    series: [{
      data: data,
      name: '123RF Coverage',
      keys: ['id', '123rf', 'competitors'],
      joinBy: ['hc-key'], // Ensure 'hc-key' is the correct key for your map data
      tooltip: {
        pointFormatter: function() {
          var hoverVotes = this.hoverVotes; // Used by pie only
          return this.name + '<br/>' +
            Highcharts.map([
              ['123RF', this['123rf']],
              ['Competitors', this['competitors']]

            ], function(line) {
              return '<span style="color:' + line[2] +
                // Colorized bullet
                '">\u25CF</span> ' +
                // Party and votes
                (line[0] === hoverVotes ? '<b>' : '') +
                line[0] + ': ' +
                Highcharts.numberFormat(line[1], 0) +
                (line[0] === hoverVotes ? '</b>' : '') +
                '<br/>';
            }).join('')
        }
      },
      dataLabels: {
        enabled: false,
        format: '{point.name}',
      },
    }, 
  ],
  };

  return (
    <div className={`container ${className}`}>
      {mapData ? (
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'mapChart'}
          options={options}
        />
      ) : (
        <p>Loading map data...</p>
      )}
    </div>
  );
};

export default MapChart;
