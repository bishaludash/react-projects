import React from 'react'
import { Switch, Route, useRouteMatch ,Link} from "react-router-dom";
import Detail from './Detail';
import Work from './Work';

const Home = () => {
  const match = useRouteMatch();

  return (
    <div>
    <ul>
      <li>
      <Link to='/home/details'>Details</Link>
      </li>
      <li>
      <Link to='/home/works'>Work</Link>
      </li>
    </ul>

      <Switch>
        <Route path='/home' exact render={()=>{return "this is home"}} />
        <Route path='/home/details' exact component={Detail} />
        <Route path='/home/works' exact component={Work} />
      </Switch>
    </div>
  )
}

export default Home