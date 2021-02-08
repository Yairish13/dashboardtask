import Chart from "react-google-charts";
import React from 'react'




function CandleStick() {
  return (
<Chart
  width={"100%"}
  height={"100%"}
  backgroundColor={'black'}
  chartType="CandlestickChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['day', 'a', 'b', 'c', 'd'],
    ['Mon', 20, 28, 38, 45],
    ['Tue', 31, 38, 55, 66],
    ['Wed', 50, 55, 77, 80],
    ['Thu', 77, 77, 66, 50],
    ['Fri', 68, 66, 22, 15],
    ['Mon', 79, 77, 25, 17],
    ['Tue', 88, 81, 24, 20],
    ['Wed', 60, 63, 16, 10],
  ]}
  options={{
    legend: 'none',
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: '#a52714' }, // red
      risingColor: { strokeWidth: 0, fill: '#0f9d58' }   // green
    },
    backgroundColor:"black"
  }}
  rootProps={{ 'data-testid': '1' }}
/>
  )
}

export default CandleStick

