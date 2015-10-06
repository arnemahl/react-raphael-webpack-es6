import React from 'react';
import Raphael from 'webpack-raphael';

import 'sass/raphael.scss';

console.log('Loaded');

class RaphaelRoot extends React.Component {

    render() {
        
        console.log('HELLO!!');
    
        const {paper} = this.props;

        const width = paper.canvas.offsetWidth;
        const height = paper.canvas.offsetHeight;

        const i = true
            ? 5
            : 0;

        console.log(i);

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

    new RaphaelRoot({ paper }).render();
};