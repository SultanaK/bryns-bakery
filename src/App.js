import React from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import AdminView from './AdminView/AdminView';
import AdminLogin from './AdminLogin/Login'
import Order from './Order/Order';
import Products from './Products/Products';
import { Route, Switch } from 'react-router-dom'
import Nav from './LandingPage/Nav'
import CakeForm from './Order/Forms/CakeForm'
import CookieForm from './Order/Forms/CookieForm'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route exact path='/login'>
          <AdminLogin />
        </Route>
        <Route exact path='/order'>
          <Order />
        </Route>
        <Route exact path='/order/cake'
        children={(rProps) => <CakeForm {...rProps} type='cake'/>}/>  
        <Route exact path='/order/cupcakes'
        children={(rProps) => <CakeForm {...rProps} type='cupcakes'/>}/>        
        <Route exact path='/order/cookies'
        children={(rProps) => <CookieForm {...rProps} type='cookies'/>}/>        

        {/* <Route exact path='/cookieform'>
          <CookieForm />
        </Route> */} 
        <Route exact path='/adminView'>
          <AdminView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
