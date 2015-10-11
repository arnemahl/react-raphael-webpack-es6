import React from 'react';

import 'styles/react.scss';

class ReactRootComponent extends React.Component {
	render() {
		return (
			<div className="react-root">
				<div className="page-header">
					This is React.
				</div>
				<div className="children">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default ReactRootComponent;
