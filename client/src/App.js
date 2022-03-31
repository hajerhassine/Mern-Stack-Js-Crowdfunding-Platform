
import logo from './logo.svg';
import './App.css';
import Home from "./Components/Frontend/Home/Home";
import HomeDoner from "./Components/Frontend/Home/HomeDoner";
import HomeCreator from "./Components/Frontend/Home/HomeCreator";
import Event from './Components/Frontend/Event/Event';
import ClientRoute from "./Routes/ClientRoute";
import { BrowserRouter as Router, Routes, Switch } from "react-router-dom";
import FAQ from './Components/Frontend/FAQ/FAQ';
import Header from './Components/Frontend/Header/Header';
import Project from './Components/Frontend/Project/Project';
import Finance from './Components/Frontend/Finance/Finance';
import Login from './Components/BackOffice/Login/Login';
import AdminRoute from './Routes/AdminRoute';
import List from './Components/BackOffice/List/List';
import Form from './Components/BackOffice/Form/Form';
import HomeBack from './Components/BackOffice/Home/Home';
// Screens
import PrivateScreen from "./Components/screens/PrivateScreen";
import LoginDonerScreen from "./Components/screens/LoginDonerScreen";
import RegisterScreen from "./Components/screens/RegisterScreenDoner";
import ForgotPasswordScreen from "./Components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./Components/screens/ResetPasswordScreen";

// Routing
import PrivateRoute from "./Routes/PrivateRoute";
import RegisterScreenDoner from './Components/screens/RegisterScreenDoner';
import RegisterInvestor from './Components/screens/RegisterInvestor';
import LoginInvestor from './Components/screens/LoginInvestor';
import LoginCreator from './Components/screens/LoginCreator';
import RegisterCreator from './Components/screens/RegisterCreator';
import ProfileDoner from './Components/screens/ProfileDoner';
import ProfileInvestor from './Components/screens/ProfileInvestor';
import ProfileCreator from './Components/screens/ProfileCreator';
import ContentCreator from './Components/BackOffice/Contents/ContentCreator';
import ContentDoner from './Components/BackOffice/Contents/ContentDoner';
import ContentInvestor from './Components/BackOffice/Contents/ContentInvestor';

function App() {
  return (
    <Router>
    <Switch>
    <PrivateRoute exact path="/" component={PrivateScreen} />
     
      <ClientRoute path="/Home" component={Home} />
      <ClientRoute path="/HomeDoner" component={HomeDoner} />
      <ClientRoute exact path="/HomeCreator" component={HomeCreator} />
      <ClientRoute path="/Event" component={Event} />
      <ClientRoute path="/FAQ" component={FAQ} />
      <ClientRoute path="/project" component={Project} />
      <ClientRoute path="/banking" component={Finance} />
     
      <ClientRoute exact path="/loginDoner" component={LoginDonerScreen} />
      <ClientRoute exact path="/loginInvestor" component={LoginInvestor} />
      <ClientRoute exact path="/registerDoner" component={RegisterScreenDoner} />
      <ClientRoute exact path="/loginCreator" component={LoginCreator} />
      <ClientRoute exact path="/registerCreator" component={RegisterCreator} />
      <ClientRoute exact path="/registerInvestor" component={RegisterInvestor} />
      <ClientRoute exact path="/myProfile" component={ProfileInvestor} />
      <ClientRoute exact path="/myProfileDoner" component={ProfileDoner} />
      <ClientRoute exact path="/myProfileCreator" component={ProfileCreator} />
      <ClientRoute
        exact
        path="/forgotpassword"
        component={ForgotPasswordScreen}
      />
      <ClientRoute
        exact
        path="/passwordreset/:resetToken"
        component={ResetPasswordScreen}
      />
      <AdminRoute exact path="/admin" component={HomeBack} />
      <AdminRoute exact path="/login" component={Login} />
      <AdminRoute exact path="/List" component={List} />
      <AdminRoute exact path="/Form" component={Form} />
      <AdminRoute exact path="/investors" component={ContentInvestor} />
      <AdminRoute exact path="/creators" component={ContentCreator} />
      <AdminRoute exact path="/doners" component={ContentDoner} />
 
    </Switch>
  </Router>
  );
}

export default App;

