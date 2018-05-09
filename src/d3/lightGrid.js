import * as d3 from 'd3';

export function drawLightGrid(fauxComponent) {
  d3
    .select(fauxComponent)
    .append('h3')
    .html('Light Grid')
    .style('color', 'white');
}
