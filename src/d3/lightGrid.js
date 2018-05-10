import * as d3 from 'd3';

/*
Schema for lightGridDefinition:
  All numbers are in feet

  {
    "theaterSize": {
      "width": 70,
      "depth": 50
    },
    "bars": [
      {
        "start": { "x": 5, "y": 10 },
        "end": { "x": 65, "y": 10 }
      }
    ]
  }
*/

export function drawLightGrid(fauxComponent, lightGridDefinition) {
  let svg = d3
    .select(fauxComponent)
    .append('svg')
    .style('height', '100%')
    .style('width', '100%')
    .style('background', 'rgba(240, 240, 240, .9)');

  const theaterDepth = lightGridDefinition.theaterSize.depth;
  const theaterWidth = lightGridDefinition.theaterSize.width;

  svg
    .attr('viewBox', `0 0 ${theaterWidth} ${theaterDepth}`)
    .attr('preserveAspectRatio', 'xMidYMin slice');

  svg
    .selectAll('g')
    .data(lightGridDefinition.bars)
    .enter()
    .append('line')
    .attr('x1', bar => bar.start.x)
    .attr('y1', bar => bar.start.y)
    .attr('x2', bar => bar.end.x)
    .attr('y2', bar => bar.end.y)
    .style('stroke', 'black');
}
