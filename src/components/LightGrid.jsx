import React from 'react';
import { withFauxDOM } from 'react-faux-dom';
import { drawLightGrid } from '../d3/lightGrid';

// For creation and testing purposes
import sampleLightGrid from '../../assets/sampleLightGrid.json';

class LightGrid extends React.Component {
  constructor(props) {
    super(props);
    const faux = this.props.connectFauxDOM('div', 'lightGrid');
    drawLightGrid(faux, sampleLightGrid);
  }
  render() {
    return <div>{this.props.lightGrid}</div>;
  }
}
export default withFauxDOM(LightGrid);
