import "./App.css";
import About from "./pages/About";
import Login from "./pages/Login";
import Boarding from "./pages/OnBoardingPage";
import BoardingTwo from "./pages/OnBoardingPageTwo";
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import BloodInvestigation from "./pages/BloodInvestigation"
import Profile from "./pages/Profile"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={About} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/boarding" component={Boarding} exact />
        <Route path="/boardingTwo" component={BoardingTwo} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/activity" component={Activity} exact />
        <Route path="/bloodInvestigation" component={BloodInvestigation} exact />
        <Route path="/profile" component={Profile} exact />
       
      </Switch>
      
     
    </div>
  );
}

export default App;
