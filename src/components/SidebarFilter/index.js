import {Link} from 'react-router-dom'

import './index.css'

const SidebarFilter = props => {
  const {sidebarFilter, activeSidebarId, isActive} = props
  const {id, sidebarName} = sidebarFilter

  const onClickSidebarId = () => {
    activeSidebarId(id)
  }

  const sidebarClass = isActive ? 'sidebar-li' : 'sidebar-white-li'

  return (
    <>
      <Link to={`/${id}/:${id}`} className="sb-link">
        <li className={sidebarClass} onClick={onClickSidebarId}>
          {sidebarName}
        </li>
      </Link>
    </>
  )
}

export default SidebarFilter
