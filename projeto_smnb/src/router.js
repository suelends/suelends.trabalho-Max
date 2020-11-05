import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import NewPacient from './pages/NewPacient';
import Schedule from './pages/Schedule/schedule';
import Perfil from './pages/Perfil/perfil';
import AltPerfil from './pages/Perfil/altperfil';

const Routes = ()  =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/newpacient" component={NewPacient}/>
                <Route exact path="/schedule" component={Schedule}/>
                <Route exact path="/perfil" component={Perfil}/>
                <Route exact path="/perfil/altperfil" component={AltPerfil}/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;