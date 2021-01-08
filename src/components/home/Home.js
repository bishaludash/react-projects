import React from 'react'
import { Switch, Route, useRouteMatch ,NavLink} from "react-router-dom";
import Detail from './Detail';
import Work from './Work';

const Home = () => {
  const match = useRouteMatch();
  console.log(match);

  return (
    <div>
    <ul>
      <li>
      <NavLink activeClassName="activeLink"to={`${match.url}/details`}>Details</NavLink>
      </li>
      <li>
      <NavLink activeClassName="activeLink" to={`${match.url}/works`}>Work</NavLink>
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