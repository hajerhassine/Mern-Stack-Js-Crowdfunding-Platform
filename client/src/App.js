
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import Home from "./Components/Frontend/Home/Home";
import Event from './Components/Frontend/Event/Event';
import ClientRoute from "./Routes/ClientRoute";
import AdminRoute from './Routes/AdminRoute';
import { BrowserRouter as Router, Routes, Switch } from "react-router-dom";
import FAQ from './Components/Frontend/FAQ/FAQ';
import Header from './Components/Frontend/Header/Header';
import Project from './Components/Frontend/Project/Project';
import Finance from './Components/Frontend/Finance/Finance';
import Login from './Components/Frontend/Login/login';
import HomeBack from './Components/BackOffice/Home/Home';
import List from './Components/BackOffice/List/List';
import Form from './Components/BackOffice/Form/Form';
import leftside from './Components/BackOffice/LeftSide/LeftSide';
import Converter from './Components/Frontend/Converter/Converter';
import { getBankingPartners } from './redux/slices/bankingpartners';
import Partners from './Components/Frontend/Partners/Partners';
import banksback from './Components/BankingPartners/BankingPartners'

function App() {
  
const dispatch = useDispatch();
useEffect(() => {

  dispatch(getBankingPartners());
  
}, [dispatch]);
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
      <ClientRoute path="/converter" component={Converter} />
      <ClientRoute path="/Partners" component={Partners} />

      
      <AdminRoute exact path="/admin" component={HomeBack} />
      
      <AdminRoute exact path="/List" component={List} />
      <AdminRoute exact path="/leftside" component={leftside} />
      <AdminRoute exact path="/Form" component={Form} />
      <AdminRoute exact path="/banking" component={banksback} />


      {/* <AdminRoute exact path="/addanking" component={Form} />
      <AdminRoute exact path="/updatebanking/:id" component={Form} /> */}
        {/* <AdminRoute path="/admin/products" component={ProductList} />
        <AdminRoute path="/admin/categories" component={Categories} />
        <AdminRoute path="/admin/orders" component={OrderListAdmin} />
        <AdminRoute path="/admin/addProduct" component={AddProduct} />
        <AdminRoute path="/admin/listclaim" exact component={Claims} />
        <AdminRoute path="/admin/listreview" exact component={Reviews} />
        <AdminRoute path="/admin/listuser" exact component={Users} />
        <AdminRoute path="/admin/comparateur" exact component={Comparateur} /> */}

      
    </Switch>
  </Router>
  );
}

export default App;

