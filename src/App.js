import { Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import history from './history'
import SignIn from "./components/auth/SignIn"
// import SignUp from "./components/auth/SignUp"
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/pages/Home/HomePage";
import AboutUs from "./components/pages/mentors/AboutUs";
import Projects from './components/projects/Projects'
import Loading from './components/layout/Loading'
import ProtectedRoute from './components/layout/ProtectedRoutes'
import ExternalApi from './components/pages/ExternalApi'
import Admin from './components/pages/Admin/Admin'
import ContactUs from './components/pages/Contact/ContactUs'
import PaymentVerify from './components/payment/PaymentVerify'
import PrivacyPolicy from './components/privacy/PrivacyPolicy'
import Footer from './components/layout/Footer'


function App() {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
    <div className="App">
          <Navbar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/about-us' component={AboutUs}/>
        <Route exact path='/contact-us' component={ContactUs} />
        <Route exact path='/privacy-policy' component={PrivacyPolicy} />
        
        <ProtectedRoute exact path='/Dashboard' component={Dashboard}/>
        <ProtectedRoute  exact path='/admin' component={Admin}/>
        <ProtectedRoute exact path='/paystack/callback' component={PaymentVerify} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
