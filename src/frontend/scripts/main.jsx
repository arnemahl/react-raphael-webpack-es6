import React from 'react';
import Raphael from 'webpack-raphael';
import RaphaelRootComponent from 'scripts/raphael/RaphaelRootComponent';
import ReactRootComponent from 'scripts/react/ReactRootComponent';

import 'styles/main.scss';

function initRaphael() {
	const paper = new Raphael('raphael-paper', '100%', 500);

	const raphaelRootComponent = new RaphaelRootComponent(paper);

	raphaelRootComponent.render();
}

function initReact() {
	const reactElement = document.getElementById('react-element');

	console.log(reactElement);

	React.render(<ReactRootComponent />, reactElement);
}

window.onload = function() {
	initRaphael();
	initReact();
};