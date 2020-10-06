import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import NewPacient from './pages/NewPacient';


const Routes = ()  =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/newpacient" component={NewPacient}/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;