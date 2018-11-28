import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components
import Layout from './components/HOC/Layout';
import Home from './components/Home';
import MoviesView from './components/pages/movies_view';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/:category/:id" exact component={MoviesView} />
            </Switch>
        </Layout>
    );
};

export default Routes;