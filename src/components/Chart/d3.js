import React, { useEffect } from 'react';
import * as d3 from 'd3';

import classes from './d3.module.css';

const mouthData = [
  { x: 70, y: 300}, { x: 70, y: 380}, { x: 330, y: 380 }, { x: 330, y: 300}];
const skinColor = '#282c34';

function D3() {
  useEffect(() => {
    d3.select('.paragraph')
      .text("Updated text!")
      .style("background-color", "#282c34");

    const svgCanvas = d3.select('.svg-container')
      .append('svg')
      .attr('width', 400)
      .attr('height', 400);

    svgCanvas.append('rect')
      .attr('fill', 'none')
      .attr('x', 30)
      .attr('y', 0)
      .attr('width', 340)
      .attr('height', 400)
      .attr('stroke', '#282c34')
      .attr('stroke-width', '3');

    const mouthGenerator = d3.line()
      .x(d => d.x)
      .y(d => d.y);

    svgCanvas.append('g')
      .selectAll('path')
      .data([mouthData])
      .enter()
      .append('path')
      .attr('d', mouthGenerator)
      .attr('fill', 'none')
      .attr('stroke', '#282c34')
      .attr('stroke-width', 3);

    const radius = 50;
    const fullCircleRad = Math.PI * 2;
    const leftEyeGenerator = d3.arc()
      .innerRadius(radius - 5)
      .outerRadius(radius)
      .startAngle(fullCircleRad - 2)
      .endAngle(fullCircleRad + 3.5);
    const eyes = svgCanvas.append('g').attr('transform', 'translate(120, 70)');
    eyes.append('path')
      .attr('d', leftEyeGenerator)
      .attr('fill', skinColor);


  }, []);

  return (
    <>
      <p className="paragraph">This is paragraph</p>
      <div className={`${classes.faceBox} svg-container`} />
    </>
  );
}

export default D3;
