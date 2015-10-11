import React from 'react';
import Router from 'react-router';
import routes from './routes';
import Raphael from 'webpack-raphael';
import RaphaelRootComponent from 'scripts/raphael/RaphaelRootComponent';

import 'styles/main.scss';

function initRaphael() {
    const paper = new Raphael('raphael-paper', '100%', 500);

    const raphaelRootComponent = new RaphaelRootComponent(paper);

    raphaelRootComponent.render();
}

function initReact() {
    const reactElement = document.getElementById('react-element');

    Router.run(routes,
        (Handler) => React.render(<Handler/>, reactElement)
    );
}

window.onload = function() {
    initRaphael();
    initReact();
};
