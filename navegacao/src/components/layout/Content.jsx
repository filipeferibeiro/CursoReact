import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Content.css';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import About from '../../views/examples/About';
import NotFound from '../../views/examples/NotFound';

const Content = props => {
    return (
        <main className="Content">
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Param} path="/param/:id" />
                <Route component={About} path="/about" /> 
                <Route component={NotFound} path="*" />
            </Switch>
        </main>
    );
}

export default Content;