import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

// theme
import Reset from './theme/Reset';

// pages
import Login from './pages/Login';
import Ordens from './pages/Ordens';
import Clientes from './pages/Clientes';
import Servicos from './pages/Servicos';
import Produtos from './pages/Produtos';

function App() {
    return (
        <>
            <Reset />
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Ordens />
                    </Route>
                    <Route path="/ordens">
                        <Ordens />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/clientes">
                        <Clientes />
                    </Route>
                    <Route path="/servicos">
                        <Servicos />
                    </Route>
                    <Route path="/produtos">
                        <Produtos />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
