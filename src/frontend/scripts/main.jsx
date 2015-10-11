import Raphael from 'webpack-raphael';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link }  from 'react-router';
import { createHashHistory } from 'history/lib';

import 'styles/main.scss';
import 'styles/react.scss';

// REACT
class ReactRootComponent extends React.Component {
    render() {
        return (
            <div className="react-root">
                <div className="page-header">
                    This is React.
                </div>
                <div>
                    <Link to="/sub-page">Link to sub-page</Link>
                    <Link to="/raphael">Link to Raphaël</Link>
                </div>
                <div className="children">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class Sub extends React.Component {
    render() {
        return (
            <div>
                This is a Sub-component, shown when navigating to a certain url.
                <Link to="/">Link to Home-page</Link>
                <Test string="it works!" />
            </div>
        );
    }
}
const Test = ({ string }) => (
    <div>Test: {string}</div>
);

// REACT + RAPHAEL
class RaphaelWrapper extends React.Component {

    setPaper = () => {
        this.setState({
            paper: new Raphael('raphael-paper', '100%', 500)
        });
    }

    removePaper = () => {
        this.state.paper.remove();
    }

    componentWillMount() {
        this.setPaper();
    }

    componentWillUnmount() {
        this.removePaper();
    }

    render() {
        const {paper} = this.state;

        return (
            <div>
                Showing raphael.
                <Link to="/">Link to Home-page</Link>
                <RaphaelComponent paper={paper} />
            </div>
        );
    }
}

class RaphaelComponent extends React.Component {

    componentWillUnmount() {
        this.props.paper.clear();
    }

    render() {
        const {paper} = this.props;

        const width = paper.canvas.offsetWidth;
        const height = paper.canvas.offsetHeight;

        const x = width / 2;
        const y = height / 2;
        const r = Math.min(width, height) / 4;

        paper.setStart();
        paper.circle(x, y, r)
        .attr({ stroke: '#fff', fill: '#5aa' });

        paper.text(x, y, 'This is Raphaël.')
        .attr({
            'stroke-width': 0,
            fill: '#fff',
            'font-size': '30'
        });
        const set = paper.setFinish();
        console.log(set);

        return false; // Raphaël components with no child-components can just return false
    }
}

window.onload = function() {
    const reactElement = document.getElementById('react-element');

    const history = createHashHistory({
        queryKey: false
    });

    const routes = (
        <Router history={history}>
            <Route path="/" component={ReactRootComponent}>
                <Route path="sub-page" component={Sub}/>
                <Route path="raphael" component={RaphaelWrapper}/>
            </Route>
        </Router>
    );
    
    ReactDOM.render(routes, reactElement);
};
