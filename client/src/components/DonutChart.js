import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
import { Row, Col } from 'react-bootstrap';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function DonutChart(props) {
  let sum = 0;
  let saving = 0;

  const savingFunc = category => {
    if (category === 'gas') return 0.06;
    if (category === 'restaurant') return 0.05;
    if (category === 'travel') return 0.03;
    if (category === 'online') return 0.06;
    if (category === 'phone') return 0.05;
    if (category === 'grocery') return 0.06;
    if (category === 'furnitures') return 0.06;
    if (category === 'streaming') return 0.05;
    if (category === 'utilities') return 0.05;
  };

  props.chosen.map(category => {
    saving += props[`${category}`] * savingFunc(category);
    sum += props[`${category}`];
  });

  // const spendDataPoints = [];
  // for (let category of props.chosen) {
  //   if (props[category] > 0) {
  //     spendDataPoints.push({
  //       name: category,
  //       d: props[category],
  //       y: (props[category] / sum) * 100
  //     });
  //   }
  // }

  const savingDataPoints = [];
  for (let category of props.chosen) {
    if (props[category] > 0) {
      savingDataPoints.push({
        name: category,
        d: props[`${category}`] * savingFunc(category).toFixed(1),
        p: savingFunc(category) * 100,
        y: (((props[`${category}`] * savingFunc(category)) / saving) * 100).toFixed(1)
      });
    }
  }

  // const spendingOptions = {
  //   animationEnabled: true,
  //   title: {
  //     text: 'Monthly Spending'
  //   },
  //   subtitles: [
  //     {
  //       text: `$${sum}`,
  //       verticalAlign: 'center',
  //       fontSize: 24,
  //       dockInsidePlotArea: true
  //     }
  //   ],
  //   data: [
  //     {
  //       type: 'doughnut',
  //       showInLegend: true,
  //       indexLabel: '{name}: ${d} ({y})',
  //       yValueFormatString: "#,###'%'",
  //       dataPoints: spendDataPoints
  //     }
  //   ]
  // };

  const savingOptions = {
    animationEnabled: true,
    title: {
      text: 'Potential Saving'
    },
    subtitles: [
      {
        text: `$$${saving}`,
        verticalAlign: 'center',
        fontSize: 24,
        dockInsidePlotArea: true
      }
    ],
    data: [
      {
        type: 'doughnut',
        showInLegend: true,
        indexLabel: '{name}: ${d}(up to {p}% reward)',
        yValueFormatString: "#,###'%'",
        dataPoints: savingDataPoints
      }
    ]
  };

  return (
    <Row>
      {/* <Col sm={8}> */}
      <CanvasJSChart options={savingOptions} />
      {/* </Col> */}
    </Row>
  );
}
