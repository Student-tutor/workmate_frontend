import { Switch, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/pages/Home/HomePage";
import Mentors from "./components/pages/mentors/Mentors";



function App() {
  return (
    <div className="App">
          <Navbar/>
      <Switch>
        <Route exact path='/sign-in' component={SignIn}/>
        <Route exact path='/sign-up' component={SignUp}/>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/mentors' component={Mentors}/>
        <Route exact path='/Dashboard' component={Dashboard}/>
      </Switch>
      
    </div>
  );
}

export default App;
