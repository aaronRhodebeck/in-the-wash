import React from 'react';
import { withFauxDOM } from 'react-faux-dom';
import { drawLightGrid } from '../d3/lightGrid';

class LightGrid extends React.Component {
  constructor(props) {
    super(props);
    const faux = this.props.connectFauxDOM('div', 'lightGrid');
    drawLightGrid(faux);
  }
  render() {
    return <div>{this.props.lightGrid}</div>;
  }
}
export default withFauxDOM(LightGrid);
