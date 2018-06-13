import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';

/* Firebase */
import '../firebase/firebase';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;