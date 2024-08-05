import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const data = [
  {
    name: '6/30/2024 - 7/30/2024',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '6/30/2024 - 7/30/2024',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '6/30/2024 - 7/30/2024',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '6/30/2024 - 7/30/2024',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
]

const LineChart = () => {
  const renderChartMonthly = () => (
    <>
      <div className="salesVsOrders-bg">
        <div>
          <p className="sales-orders-p">Sales Vs Orders</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{top: 10, right: 0, left: 0, bottom: 0}}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  )

  const renderChartData = () => <>{renderChartMonthly()}</>

  return (
    <>
      <div className="line-chart-div">{renderChartData()}</div>
    </>
  )
}

export default LineChart
