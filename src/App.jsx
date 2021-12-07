import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
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
        <HashRouter basename='/MyFinanhelp'>
            <Layout />
            <Switch>
                <Route exact path='/' component={Move} />
                <Route exact path='/home' component={Main} />
                <Route exact path='/salary' component={Salary} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/login' component={Login} />
                <Route path='*' component={NotFound} />
            </Switch>
        </HashRouter>
    );
}
 
export default App;