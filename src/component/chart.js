import React from 'react';

import {CanvasJSChart} from 'canvasjs-react-charts';

function Chart() {
  const options = {
    animationEnabled: true,
    theme: 'dark2',
    title: {
      text: 'Skills',
    },
    axisX: {
      title: 'Langages',
      reversed: true,
    },
    axisY: {
      title: '',
      includeZero: true,
    },
    data: [
      {
        type: 'bar',
        dataPoints: [
          {y: 90, label: 'React js'},
          {y: 98, label: 'React Native'},
          {y: 98, label: 'HTML & CSS'},
          {y: 96, label: 'JavaScript'},
          {y: 92, label: 'Java'},
          {y: 70, label: 'Figma'},
        ],
      },
    ],
  };

  return (
    <div style={{marginTop: 40}}>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default Chart;
