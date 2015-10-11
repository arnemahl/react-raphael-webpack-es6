import React from 'react';
import {Route, RouteHandler, Link} from 'react-router';
import ReactRootComponent from 'scripts/react/ReactRootComponent';

class Root extends React.Component {
    render() {
        return (
            <ReactRootComponent>
                This is the Root component which is always shown.
                <Link to="sub-page">Link to sub-page</Link>
                <RouteHandler />
            </ReactRootComponent>
        );
    }
}

class Sub extends React.Component {
    render() {
        return (
            <div>
                This is a Sub-component, shown when navigating to a certain url.
                <Link to="home">Link to Home-page</Link>
            </div>
        );
    }
}

const routes = (
    <Route name="home" path="/" handler={Root}>
        <Route name="sub-page" path="sub-page" handler={Sub}/>
    </Route>
);

export default routes;