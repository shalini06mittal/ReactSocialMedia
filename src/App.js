import './App.css';
import {Link, Redirect, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Forgot from './components/Forgot';
import SocialBuilder from './components/SocialBuilder';

import Logout from './components/Logout';


function App() {

  return (
    <div className="App">
      
          <Switch> 
                <Route  path="/login" component={Login} ></Route>
                <Route path="/signup" component={SignUp}></Route> 
                <Route path="/forgot" component={Forgot}></Route> 
                <Route path="/logout" component={Logout}></Route> 
               <Route  path="/" component={SocialBuilder}>
               
                </Route> 
               
            </Switch>
    </div>
  );
}

export default App;
