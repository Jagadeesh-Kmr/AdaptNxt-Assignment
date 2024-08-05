// import React from 'react'
import {Chart} from 'react-google-charts'

import './index.css'

export const data = [
  ['Task', 'Hours per Day'],
  ['WooCommerce Store', 5],
  ['Shopify Store', 4],
]

export const options = {
  title: 'Portion of Sales',
  pieHole: 0.4,
  is3D: true,
}

const PieChart = () => (
  <>
    <div className="pie-chart-div">
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  </>
)

export default PieChart
