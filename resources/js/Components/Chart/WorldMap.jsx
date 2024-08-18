import React, { useRef, useState } from 'react';
const Legend = React.lazy(() => import('./Legend'));
import * as d3 from "d3";


const WorldMap = ({ className, width, height, data }) => {
  const worldPopulation = data.worldPopulation;
  const topography = data.topography;

  const chartRef = useRef(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipData, setTooltipData] = useState({
    name: "",
    population: "",
    x: 0,
    y: 0,
  });

  // Map and projection
  const path = d3.geoPath();
  const projection = d3
    .geoMercator()
    .scale(85)
    .center([0, 30])
    .translate([width / 2, height / 2]);

  const pathGenerator = path.projection(projection);

  // Color scale
  const colorScale = d3
    .scaleThreshold()
    .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
    .range(d3.schemeBlues[7]);

  return (
    <div className={`container ${className}`}>
      {/* Tooltip */}
      {tooltipData && (
        <div
          className={`tooltip ${tooltipVisible ? "visible" : ""}`}
          style={{
            left: tooltipData.left,
            bottom: tooltipData.bottom,
          }}
        >
          {tooltipData.name}
          <br />
          {tooltipData.population}
        </div>
      )}
      <svg
        ref={chartRef}
        className="viz"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        <g className="topography">
          {topography.features.map((d) => (
            <path
              key={d.id}
              d={pathGenerator(d)}
              fill={colorScale(worldPopulation[d.id] || 0)}
              stroke="#FFFFFF"
              strokeWidth={0.3}
              onMouseEnter={() => {
                setTooltipVisible(true);
              }}
              onMouseLeave={() => {
                setTooltipVisible(false);
              }}
              onMouseMove={(event) => {
                const population = (
                  worldPopulation[d.id] || "N/A"
                ).toLocaleString();

                // get x and y position relative to the chart
                const [x, y] = d3.pointer(event, chartRef.current);

                setTooltipData({
                  name: d.properties.name,
                  population,
                  left: x - 30,
                  top: y - 80,
                });
              }}
            />
          ))}
        </g>

        {/* Legend */}
        <g className="legend" transform="translate(10,10)">
          <Legend
            color={colorScale}
            width={height / 1.4}
            tickFormat={d3.format("~s")}
          />
        </g>
      </svg>
    </div>
  );
};

export default WorldMap;
