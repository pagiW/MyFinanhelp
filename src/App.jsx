import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Move from './components/Move';
import Signup from './containers/Signup';
import Main from './containers/Main';
import Salary from './containers/Salary';
import Login from './containers/Login';
import NotFound from './containers/NotFound';
import './style/app.scss';

const App = () => {
    return (
        <BrowserRouter basename='/'>
            <Layout />
            <Switch>
                <Route exact path='/' component={Move} />
                <Route exact path='/home' component={Main} />
                <Route exact path='/salary' component={Salary} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
 
export default App;