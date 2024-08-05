import {Switch, Route} from 'react-router-dom'

import SalesVsOrders from './components/SalesVsOrders'
import Dashboard from './components/Dashboard'
import Inventory from './components/Inventory'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={SalesVsOrders} />
    <Route exact path="/dashboard/:id" component={Dashboard} />
    <Route exact path="/inventory/:id" component={Inventory} />
    <Route component={NotFound} />
  </Switch>
)

export default App
