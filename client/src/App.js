
import logo from './logo.svg';
import './App.css';
import Home from "./Components/Frontend/Home/Home";
import Event from './Components/Frontend/Event/Event';
import ClientRoute from "./Routes/ClientRoute";
import AdminRoute from './Routes/AdminRoute';
import { BrowserRouter as Router, Routes, Switch } from "react-router-dom";
import FAQ from './Components/Frontend/FAQ/FAQ';
import Project from './Components/Frontend/Project/Project';

import Finance from './Components/Frontend/Finance/Finance';
import Login from './Components/Frontend/Login/login';
import HomeBack from './Components/BackOffice/Home/Home';
import List from './Components/BackOffice/List/List';
import Form from './Components/BackOffice/Form/Form'; 
import EventCalendar from './Components/BackOffice/Events/event-calendar.component';
import CreateEvent from './Components/BackOffice/Events/create-event.component';
import ListEvent from './Components/BackOffice/Events/event-list.component'; 
import EditEvent from './Components/BackOffice/Events/edit-event.component'; 
import EventList from './Components/BackOffice/Contents/EventList';
import EventDetails from './Components/Frontend/Event/EventDetails';
import Streaming from './Components/Frontend/Streaming/index';

const App = () => {


  return (
    <Router>
    <Switch>
      <ClientRoute path="/" exact component={Home} />
      <ClientRoute path="/Home" component={Home} />
      <ClientRoute path="/Event" component={Event} />
      <ClientRoute path="/FAQ" component={FAQ} />
      <ClientRoute path="/project" component={Project} />
      
      <ClientRoute path="/loan" component={Finance} />
      <ClientRoute path="/login" component={Login} />
      <ClientRoute path="/Streaming" component={Streaming} />
      <ClientRoute path="/EventDetails" component={EventDetails} />

   
      <AdminRoute exact path="/admin" component={HomeBack} />
      <AdminRoute exact path="/List" component={List} />
      <AdminRoute exact path="/Form" component={Form} />
      <AdminRoute exact path="/EventList" component={EventList} />

      <AdminRoute exact path="/EventCalendar" component={EventCalendar} />
      <AdminRoute exact path="/listevent" component={ListEvent} />
      <AdminRoute exact path="/createevent" component={CreateEvent} />
      <AdminRoute exact path="/edit/event/:id" component={EditEvent} />
      

      
    </Switch>
  </Router>
  );
}

export default App;

