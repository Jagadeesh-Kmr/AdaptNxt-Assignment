import {Component} from 'react'

import './index.css'
import SidebarFilter from '../SidebarFilter'

const sidebarData = [
  {id: 'dashboard', sidebarName: 'Dashboard'},
  {id: 'inventory', sidebarName: 'Inventory'},
  {id: 'order', sidebarName: 'Order'},
  {id: 'returns', sidebarName: 'Returns'},
  {id: 'customers', sidebarName: 'Customers'},
  {id: 'shipping', sidebarName: 'shipping'},
  {id: 'channel', sidebarName: 'Channel'},
  {id: 'integrations', sidebarName: 'Integrations'},
]

class Sidebar extends Component {
  state = {
    sidebarId: sidebarData[0].id,
  }

  activeId = id => {
    this.setState({sidebarId: id})
  }

  renderSidebar = () => {
    const {sidebarId} = this.state
    return (
      <ul className="sidebar-ul">
        {sidebarData.map(eachData => (
          <SidebarFilter
            sidebarFilter={eachData}
            key={eachData.id}
            activeSidebarId={this.activeId}
            isActive={sidebarId === eachData.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <>
        <div className="sidebar-bg">{this.renderSidebar()}</div>
      </>
    )
  }
}

export default Sidebar
