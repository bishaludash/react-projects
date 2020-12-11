import React, {Fragment} from 'react';
import Navbar from './components/layouts/Navbar'
import UserItem from './components/users/UserItem'
import './App.css';

function App() {
	const name = "Bishal Udash";
	const foo = () => "bars";

  return (
    <div className="App">
    	<Navbar />
      <UserItem usertitle="chief" />

      <h1>Hello {name}</h1>
      <p>{foo()}</p>
    </div>
  );
}

export default App;
