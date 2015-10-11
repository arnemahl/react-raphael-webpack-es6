
class RaphaelRootComponent {

	constructor(paper) {
		this.paper = paper;
	}

	render() {
		const {paper} = this;

		const width = paper.canvas.offsetWidth;
		const height = paper.canvas.offsetHeight;

		const x = width / 2;
		const y = height / 2;
		const r = Math.min(width, height) / 4;

		paper.circle(x, y, r)
		.attr({ stroke: '#fff', fill: '#5aa' });

		paper.text(x, y, 'This is Raphaël.')
		.attr({
			'stroke-width': 0,
			fill: '#fff',
			'font-size': '30'
		});
	}
}

export default RaphaelRootComponent;
