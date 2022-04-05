
import logo from './logo.svg';
import './App.css';
import Home from "./Components/Frontend/Home/Home";
import Event from './Components/Frontend/Event/Event';
import ClientRoute from "./Routes/ClientRoute";
import { BrowserRouter as Router, Routes, Switch } from "react-router-dom";
import FAQ from './Components/Frontend/FAQ/FAQ';
import Header from './Components/Frontend/Header/Header';
import Project from './Components/Frontend/Project/Project';
import Finance from './Components/Frontend/Finance/Finance';
import Login from './Components/Frontend/Login/login';
import ProjectDetails from './Components/Frontend/Project/ProjectDetails';

function App() {
  return (
    <Router>
    <Switch>
      <ClientRoute path="/" exact component={Home} />
      <ClientRoute path="/Home" component={Home} />
      <ClientRoute path="/Event" component={Event} />
      <ClientRoute path="/FAQ" component={FAQ} />
      <ClientRoute path="/project" component={Project} />
      <ClientRoute path="/banking" component={Finance} />
      <ClientRoute path="/login" component={Login} />
      <ClientRoute path="/ProjectDetails/:id" component={ProjectDetails} />
    </Switch>
  </Router>
  );
}

export default App;

