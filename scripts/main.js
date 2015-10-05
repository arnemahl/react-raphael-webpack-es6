import React from 'react';
import Raphael from 'webpack-raphael';

import '../sass/raphael.scss';


class RaphaelRoot extends React.Component {

	render() {
		const {paper} = this.props;

		const width = paper.canvas.offsetWidth;
		const height = paper.canvas.offsetHeight;

		const x = width / 2;
		const y = height / 2;
		const r = Math.min(width, height) / 4;

		console.log('Size:', width, '*', height);


		paper.circle(x, y, r)
			.attr({ stroke: '#fff', fill: '#5aa' });

		// return false;
	}
}

window.onload = function() {
	const paper = new Raphael('raphael-paper', '100%', 500);

	const test = new RaphaelRoot({ paper }).render();
};