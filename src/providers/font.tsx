import React from 'react';

export class FontProvider extends React.Component {
	componentDidMount() {
		const WebFont = require('webfontloader');
		WebFont.load({
			google: {
				families: ['Lobster', 'Roboto Slab'],
			},
		});
	}

	render() {
		return <></>;
	}
}