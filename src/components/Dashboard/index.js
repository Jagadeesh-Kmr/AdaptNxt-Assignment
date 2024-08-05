import './index.css'
import LineChart from '../LineChart'
import PieChart from '../PieChart'
import Sidebar from '../Sidebar'

const Dashboard = () => (
  <>
    <div className="db-main-bg">
      <Sidebar />
      <div className="dashboard-bg">
        <LineChart />
        <PieChart />
      </div>
    </div>
  </>
)
export default Dashboard
